const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const authInstitute = async (req, res, next) => {
  try {
    const user = await prisma.userLogin.findFirst({
      where: { username: req.user.username },
      include: {
        role: true,
        institute:true
      },
    });
  
    if (user.role.name !== "institute")
      return res
        .status(500)
        .json({ msg: "Institute resources access denied." });
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authInstitute;
