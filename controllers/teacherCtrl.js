const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const teacherCtrl = {
  myTeachers: async (req, res) => {
    try {
      const teacher = await prisma.teacher.findMany({
        where: { instituteId: req.user.institute.id },
        include: {
          courses: true,
        },
      });

      res.json(teacher);
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  teacher: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await prisma.teacher.findFirst({
        where: { id: id, instituteId: req.user.institute.id },
      });
      res.json(teacher);
    } catch (err) {
      return res.status(500).json({ msg: err.meta.cause });
    }
  },

  add: async (req, res) => {
    try {
      const {
        name,
        gender,
        phone,
        salary,
        address,
        qualification,
        email,
        dob,
        courseId,
      } = req.body;

      if (
        !name ||
        !gender ||
        !phone ||
        !salary ||
        !address ||
        !qualification ||
        !email ||
        !courseId ||
        !dob
      )
        return res.status(400).json({ msg: "All fields are required" });
      const teacher = await prisma.teacher.findFirst({
        where: { name: name, phone: phone },
      });
      if (teacher) {
        return res.status(400).json({ msg: "This teacher already exists." });
      }

      if (req.files && req.files.photo) {
        var photo = req.files.photo;
        var photo_name = Date.now() + photo.name.split(" ").join("_");
        photo.mv("./uploads/teachers/photo/" + photo_name, function (err) {
          if (err) {
            res.send(err);
          }
        });
      } else {
        return res.status(400).json({ msg: "Photo Field is required" });
      }
      if (req.files && req.files.nagrita) {
        var nagrita = req.files.nagrita;
        var nagrita_name = Date.now() + nagrita.name.split(" ").join("_");
        nagrita.mv(
          "./uploads/teachers/nagrita/" + nagrita_name,
          function (err) {
            if (err) {
              res.send(err);
            }
          }
        );
      } else {
        return res.status(400).json({ msg: "Nagrita Field is required" });
      }

      const newData = await prisma.teacher.create({
        data: {
          instituteId: req.user.institute.id,
          name: name,
          gender: gender,
          phone: phone,
          salary: salary,
          address: address,
          qualification: qualification,
          email: email,
          photo: photo_name,
          nagrita: nagrita_name,
          dob: new Date(dob),
          courses: {
            connect: { id: courseId },
          },
        },
      });
      res.json({
        msg: `${newData.name} is added!`,
      });
    } catch (err) {
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        name,
        gender,
        phone,
        salary,
        address,
        qualification,
        email,
        dob,
      } = req.body;

      if (
        !name ||
        !gender ||
        !phone ||
        !salary ||
        !address ||
        !qualification ||
        !email ||
       
        !dob
      )
        return res.status(400).json({ msg: "All fields are required" });
      const teacher = await prisma.teacher.findFirst({
        where: { id: id },
      });
     

       const photoPath = "./uploads/teachers/photo/" + teacher.photo;
       const nagritaPath = "./uploads/teachers/nagrita/" + teacher.nagrita;
      const fileExists = async (path) =>
        !!(await fs.promises.stat(path).catch((e) => false));

     

      if (req.files && req.files.photo) {
        var photo = req.files.photo;
        var photo_name = Date.now() + photo.name.split(" ").join("_");
        if (await fileExists(photoPath)) {
          fs.unlinkSync(photoPath);
        }
        photo.mv("./uploads/teachers/photo/" + photo_name, function (err) {
          if (err) {
            res.send(err);
          }
        });
      } else {
        return res.status(400).json({ msg: "Photo Field is required" });
      }
      if (req.files && req.files.nagrita) {
        var nagrita = req.files.nagrita;
        var nagrita_name = Date.now() + nagrita.name.split(" ").join("_");
        if (await fileExists(nagritaPath)) {
          fs.unlinkSync(nagritaPath);
        }
        nagrita.mv(
          "./uploads/teachers/nagrita/" + nagrita_name,
          function (err) {
            if (err) {
              res.send(err);
            }
          }
        );
      } else {
        return res.status(400).json({ msg: "Nagrita Field is required" });
      }

      const updatedTeacher = await prisma.teacher.update({
        where: { id: id },
        data: {
          name: name,
          gender: gender,
          phone: phone,
          salary: salary,
          address: address,
          qualification: qualification,
          email: email,
          photo: photo_name ? photo_name : teacher.photo,
          nagrita: nagrita_name ? nagrita_name : teacher.nagrita,
          dob: new Date(dob),
          
        },
      });
      res.json({
        mg: "Teacher Updated",
        data: updatedTeacher,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something Went wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await prisma.teacher.findFirst({
        where: { id: id },
      });
      const fileExists = async (path) =>
        !!(await fs.promises.stat(path).catch((e) => false));

      const photoPath = "./uploads/teachers/photo/" + teacher.photo;
      const nagritaPath = "./uploads/teachers/nagrita/" + teacher.nagrita;
      if (await fileExists(photoPath)) {
        fs.unlinkSync(photoPath);
      }
      if (await fileExists(nagritaPath)) {
        fs.unlinkSync(nagritaPath);
      }
      const deleteTeacher = await prisma.teacher.delete({
        where: { id: id },
      });
      res.json({
        msg: `${deleteTeacher.name} is deleted !!`,
      });
    } catch (err) {
       console.log(err);
       return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  deleteCoursesOfTeacher: async (req, res) => {
    try {
      const { id,courseId } = req.params;
     
   await prisma.teacher.update({
        where: { id: id },
        data: {
          courses: {
            disconnect: { id: courseId },
          },
        },
      });
      res.json({
        msg: `Course is  removed from teacher!!`,
      });
    } catch (err) {
       console.log(err);
       return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  addCoursesToTeacher: async (req, res) => {
    try {
      const { teacherId } = req.params;
     
   await prisma.teacher.update({
     where: { id: teacherId },
     data: {
       courses: {
         connect: { id: req.body.courseId },
       },
     },
   });
      res.json({
        msg: `Course is added to teacher!!`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
};
module.exports = teacherCtrl;
