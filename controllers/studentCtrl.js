const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const studentCtrl = {
  myStudents: async (req, res) => {
    try {
      const student = await prisma.student.findMany({
        where: { instituteId: req.user.institute.id },
        include: {
          courses: true,
          fees: true,
        },
      });

      res.json(student);
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  student: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await prisma.student.findFirst({
        where: { id: id, instituteId: req.user.institute.id },
      });
      res.json(student);
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
        batch,
        address,
        qualification,
        email,
        dob,
        courseIds,
      } = req.body;

      if (
        !name ||
        !gender ||
        !phone ||
        !batch ||
        !address ||
        !courseIds ||
        !dob
      )
        return res.status(400).json({ msg: "All fields are required" });

      const student = await prisma.student.findFirst({
        where: { name: name, phone: phone },
      });

      if (student) {
        return res.status(400).json({ msg: "This student already exists." });
      }

      if (req.files && req.files.photo) {
        var photo = req.files.photo;
        var photo_name = Date.now() + photo.name.split(" ").join("_");
        photo.mv("./uploads/students/photo/" + photo_name, function (err) {
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
          "./uploads/students/nagrita/" + nagrita_name,
          function (err) {
            if (err) {
              res.send(err);
            }
          }
        );
      } else {
        return res.status(400).json({ msg: "Nagrita Field is required" });
      }

      const newData = await prisma.student.create({
        data: {
          instituteId: req.user.institute.id,
          name: name,
          gender: gender,
          phone: phone,
          batch: batch,
          address: address,
          qualification: qualification,
          email: email,
          photo: photo_name,
          nagrita: nagrita_name,
          dob: new Date(dob),
          courses: {
            connect: courseIds.map((courseId) => ({ id: courseId })),
          },
        },
      });

      res.json({
        msg: `${newData.name} is added!`,
      });
    } catch (err) {
      console.log(err);
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
        batch,
        address,
        qualification,
        email,
        dob,
        courseId,
      } = req.body;

      if (!name || !gender || !phone || !batch || !address || !courseId || !dob)
        return res.status(400).json({ msg: "All fields are required" });

      const student = await prisma.student.findUnique({
        where: { id: parseInt(id) },
      });

      if (!student) {
        return res.status(404).json({ msg: "Student not found" });
      }

      const photoPath = "./uploads/students/photo/" + student.photo;
      const nagritaPath = "./uploads/students/nagrita/" + student.nagrita;
      const fileExists = async (path) =>
        !!(await fs.promises.stat(path).catch((e) => false));

      if (req.files && req.files.photo) {
        var photo = req.files.photo;
        var photo_name = Date.now() + photo.name.split(" ").join("_");
        if (await fileExists(photoPath)) {
          fs.unlinkSync(photoPath);
        }
        photo.mv("./uploads/students/photo/" + photo_name, function (err) {
          if (err) {
            res.send(err);
          }
        });
      } else {
        photo_name = student.photo;
      }

      if (req.files && req.files.nagrita) {
        var nagrita = req.files.nagrita;
        var nagrita_name = Date.now() + nagrita.name.split(" ").join("_");
        if (await fileExists(nagritaPath)) {
          fs.unlinkSync(nagritaPath);
        }
        nagrita.mv(
          "./uploads/students/nagrita/" + nagrita_name,
          function (err) {
            if (err) {
              res.send(err);
            }
          }
        );
      } else {
        nagrita_name = student.nagrita;
      }

      const updatedStudent = await prisma.student.update({
        where: { id: parseInt(id) },
        data: {
          name: name,
          gender: gender,
          phone: phone,
          batch: batch,
          address: address,
          qualification: qualification,
          email: email,
          photo: photo_name,
          nagrita: nagrita_name,
          dob: new Date(dob),
        },
      });

      res.json({
        msg: "Student Updated",
        data: updatedStudent,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the student by ID
      const student = await prisma.student.findUnique({
        where: { id: id },
        include: {
          courses: {
            include: {
              students: true,
            },
          },
          fees: true,
        },
      });

      if (!student) {
        return res.status(404).json({ msg: "Student not found" });
      }

      const fileExists = async (path) =>
        !!(await fs.promises.stat(path).catch((e) => false));

      const photoPath = "./uploads/students/photo/" + student.photo;
      const nagritaPath = "./uploads/students/nagrita/" + student.nagrita;

      // Delete the student's photo file
      if (await fileExists(photoPath)) {
        fs.unlinkSync(photoPath);
      }

      // Delete the student's nagrita file
      if (await fileExists(nagritaPath)) {
        fs.unlinkSync(nagritaPath);
      }

      // Delete the student's associated courses and remove the student from CourseToStudent
      for (const course of student.courses) {
        await prisma.course.update({
          where: { id: course.id },
          data: {
            students: {
              disconnect: { id: student.id },
            },
          },
        });
      }

      // Delete the student's fees
      await prisma.fee.deleteMany({
        where: { studentId: student.id },
      });

      // Delete the student
      const deleteStudent = await prisma.student.delete({
        where: { id: student.id },
      });

      res.json({
        msg: `${deleteStudent.name} and their associated courses and fees are deleted!`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },

  deleteCoursesOfStudent: async (req, res) => {
    try {
      const { id, courseId } = req.params;

      await prisma.student.update({
        where: { id: id },
        data: {
          courses: {
            disconnect: { id: courseId },
          },
        },
      });
      res.json({
        msg: `Course is removed from student!!`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  addCoursesToStudent: async (req, res) => {
    try {
      const { studentId } = req.params;

      await prisma.student.update({
        where: { id: studentId },
        data: {
          courses: {
            connect: { id: req.body.courseId },
          },
        },
      });
      res.json({
        msg: `Course is added to student!!`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
};
module.exports = studentCtrl;
