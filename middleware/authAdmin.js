const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const authAdmin = async (req, res, next) => {
  try {
    const user = await prisma.userLogin.findFirst({
      where: { username: req.user.username },
      include: {
        role: true,
      },
    });
    if (user.role.name !== "superadmin")
      return res.status(500).json({ msg: "Admin resources access denied." });
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;
