const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const roleCtrl = {
  myCourses: async (req, res) => {
    try {
      const course = await prisma.course.findMany({
        where: { instituteId: req.user.institute.id },
        select: {
          instituteId: false,
          id: true,
          name: true,
          fee: true,
          status: true,
          created_at: true,
        },
        
      });

      res.json(course);
    } catch (err) {
       console.log(err);
       return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  course: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await prisma.course.findFirst({
        where: { id: id, instituteId: req.user.institute.id },
      });
      res.json(course);
    } catch (err) {
       console.log(err);
       return res.status(500).json({ msg: "Something went wrong" });
    }
  },

  add: async (req, res) => {
    try {
      const { name, fee, status } = req.body;
      if (!name || !fee || !status)
        return res.status(400).json({ msg: "All fields are required" });
      const course = await prisma.course.findFirst({
        where: { name: name, instituteId: req.user.institute.id },
      });
      if (course) {
        return res.status(400).json({ msg: "This course already exists." });
      }
      const newData = await prisma.course.create({
        data: {
          name: name,
          instituteId: req.user.institute.id,
          fee: fee,
          status: status,
        },
      });
      res.json(newData);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, fee, status } = req.body;
      if (!name || !fee || !status)
        return res.status(400).json({ msg: "All fields are required" });
    
      const updatedRole = await prisma.course.update({
        where: { id: id },
        data: {
          name: name,
          instituteId: req.user.institute.id,
          fee: fee,
          status: status,
        },
      });
      res.json(updatedRole);
    } catch (err) {
       console.log(err);
       return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await prisma.course.delete({
        where: { id: id },
      });
      res.json({
        msg:`${course.name} is deleted !!`
      });
    } catch (err) {
       console.log(err);
       return res.status(500).json({ msg: "Something went wrong" });
    }
  },
};

module.exports = roleCtrl;
