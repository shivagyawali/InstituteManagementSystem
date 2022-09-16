const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const roleCtrl = {
  allRoles: async (req, res) => {
    try {
      await prisma.role
        .findMany({})
        .then((roles) => {
          res.json(roles);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },
  role: async (req, res) => {
    try {
      const { id } = req.params;
      const role = await prisma.role.findFirst({
        where: { id: id },
      });
      res.json(role);
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },

  add: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) return res.status(400).json({ msg: "Name Field is required" });
      const role = await prisma.role.findFirst({
        where: { name: name },
      });
      if (role) {
        return res.status(400).json({ msg: "This role already exists." });
      }
      const user = await prisma.role.create({
        data: {
          name: name,
        },
      });
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      if (!name) return res.status(400).json({ msg: "Name Field is required" });
      const role = await prisma.role.findFirst({
        where: { name: name },
      });

      if (role !== null) {
        return res.status(400).json({ msg: "This role already exists." });
      }

      const updatedRole = await prisma.role.update({
        where: { id: id },
        data: { name: name },
      });
      res.json(updatedRole);
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },
};

module.exports = roleCtrl;
