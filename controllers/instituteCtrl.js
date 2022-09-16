const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const instituteCtrl = {
  allInstitute: async (req, res) => {
    try {
      await prisma.institute
        .findMany({
          include:{
            Course:true
          }
        })
        .then((institutes) => {
          res.json(institutes);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },
  institute: async (req, res) => {
    try {
      const { id } = req.params;
      const institute = await prisma.institute.findFirst({
        where: { id: id },
      });
      res.json(institute);
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },

  add: async (req, res) => {
    try {
      const { name, userLoginId,address,phone,pan } = req.body;
      if (!name || !userLoginId || !address||!pan) return res.status(400).json({ msg: "All fields are required" });
      const institute = await prisma.institute.findFirst({
        where: { pan: pan },
      });
      if (institute) {
        return res.status(400).json({ msg: "This institute already exists." });
      }
      const newData = await prisma.institute.create({
        data: {
          name: name,
          userLoginId: userLoginId,
          address: address,
          phone: phone,
          pan: pan,
        },
      });
      res.json(newData);
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
       const { name, address, phone, pan } = req.body;
      if (!name || !userLoginId || !address || !pan)
        return res.status(400).json({ msg: "All fields are required" });
      

      const updatedRole = await prisma.institute.update({
        where: { id: id },
        data: {
          name: name,
          address: address,
          phone: phone,
         
        },
      });
      res.json(updatedRole);
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const institute = await prisma.institute.delete({
        where: { id: id },
      });
      res.json(institute);
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },
};

module.exports = instituteCtrl;
