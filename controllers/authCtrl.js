const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
let refreshTokens = [];
const authCtrl = {
  allUsers: async (req, res) => {
    try {
      await prisma.userLogin
        .findMany({
          include: {
            role: true,
          },
        })
        .then((users) => {
          res.json(users);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
     return res.status(500).json({ msg: err });
    }
  },

  register: async (req, res) => {
    try {
      const { username, password,roleId } = req.body;
   
      if (!username || !password || !roleId)
        return res.status(400).json({ msg: "Please fill in all fields." });

      const user = await prisma.userLogin.findFirst({
        where: { username: username },
      });
      if (user)
        return res.status(400).json({ msg: "This user already exists." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });

      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = await prisma.userLogin.create({
        data: {
          roleId:roleId,
          username: username,
          password: passwordHash,
        },
      });
      res.json({
        msg: "Account successfully registered!",
      });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  login: async (req, res) => {
    try {
      const user = await prisma.userLogin.findFirst({
        where: { username: req.body.username },
        include: {
          role: true,
        },
      });
      if (!user) res.json({ msg: "User doesn't exists" });
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign(
        user,
          process.env.ACCESS_TOKEN_SECRET
        );
        //put token in cookie
        res.cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          expire: new Date() + 999,
        });
        return res.status(200).json({
          msg: "Logged in successfully 😊 👌",
          token: token,
         
        });
      } else {
        return res.status(400).json({
          msg: `Email and password doesn't match`,
        });
      }
    } catch (err) {
     return res.status(500).json({ msg: err });
    }
  },
  logout: async (req, res) => {
    try {
      return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out 😏 🍀" });
    } catch (err) {
     return res.status(500).json({ msg: err });
    }
  },
};

module.exports = authCtrl;
