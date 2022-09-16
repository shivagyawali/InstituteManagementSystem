const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const staffCtrl = {
  myStaffs: async (req, res) => {
    try {
      const staff = await prisma.staff.findMany({
        where: { instituteId: req.user.institute.id },
      });

      res.json(staff);
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  staff: async (req, res) => {
    try {
      const { id } = req.params;
      const staff = await prisma.staff.findFirst({
        where: { id: id, instituteId: req.user.institute.id },
      });
      res.json(staff);
    } catch (err) {
      return res.status(500).json({ msg: "Something went wrong" });
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
      } = req.body;

      if (
        !name ||
        !gender ||
        !phone ||
        !address ||
        !dob
      )
        return res.status(400).json({ msg: "All fields are required" });
      const staff = await prisma.staff.findFirst({
        where: { name: name, phone: phone },
      });
      if (staff) {
        return res.status(400).json({ msg: "This staff already exists." });
      }

      if (req.files && req.files.photo) {
        var photo = req.files.photo;
        var photo_name = Date.now() + photo.name.split(" ").join("_");
        photo.mv("./uploads/staffs/photo/" + photo_name, function (err) {
          if (err) {
            return res.status(400).json({ msg: "Photo Field issue" });
          }
        });
      } else {
        return res.status(400).json({ msg: "Photo Field is required" });
      }
      if (req.files && req.files.nagrita) {
        var nagrita = req.files.nagrita;
        var nagrita_name = Date.now() + nagrita.name.split(" ").join("_");
        nagrita.mv("./uploads/staffs/nagrita/" + nagrita_name, function (err) {
          if (err) {
             return res.status(400).json({ msg: "Photo Field issue" });
          }
        });
      } else {
        return res.status(400).json({ msg: "Nagrita Field is required" });
      }

      const newData = await prisma.staff.create({
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

       if (!name || !gender || !phone || !address || !dob)
         return res.status(400).json({ msg: "All fields are required" });
      const staff = await prisma.staff.findFirst({
        where: { id: id },
      });

      const photoPath = "./uploads/staffs/photo/" + staff.photo;
      const nagritaPath = "./uploads/staffs/nagrita/" + staff.nagrita;
      const fileExists = async (path) =>
        !!(await fs.promises.stat(path).catch((e) => false));

      if (req.files && req.files.photo) {
        var photo = req.files.photo;
        var photo_name = Date.now() + photo.name.split(" ").join("_");
        if (await fileExists(photoPath)) {
          fs.unlinkSync(photoPath);
        }
        photo.mv("./uploads/staffs/photo/" + photo_name, function (err) {
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
        nagrita.mv("./uploads/staffs/nagrita/" + nagrita_name, function (err) {
          if (err) {
            res.send(err);
          }
        });
      } else {
        return res.status(400).json({ msg: "Nagrita Field is required" });
      }

      const updatedStaff = await prisma.staff.update({
        where: { id: id },
        data: {
          name: name,
          gender: gender,
          phone: phone,
          salary: salary,
          address: address,
          qualification: qualification,
          email: email,
          photo: photo_name ? photo_name : staff.photo,
          nagrita: nagrita_name ? nagrita_name : staff.nagrita,
          dob: new Date(dob),
        },
      });
      res.json({
        mg: "Staff Updated",
        data: updatedStaff,
      });
    } catch (err) {
    
      return res.status(500).json({ msg: "Something Went wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const staff = await prisma.staff.findFirst({
        where: { id: id },
      });
      const fileExists = async (path) =>
        !!(await fs.promises.stat(path).catch((e) => false));

      const photoPath = "./uploads/staffs/photo/" + staff.photo;
      const nagritaPath = "./uploads/staffs/nagrita/" + staff.nagrita;
      if (await fileExists(photoPath)) {
        fs.unlinkSync(photoPath);
      }
      if (await fileExists(nagritaPath)) {
        fs.unlinkSync(nagritaPath);
      }
      const deleteStaff = await prisma.staff.delete({
        where: { id: id },
      });
      res.json({
        msg: `${deleteStaff.name} is deleted !!`,
      });
    } catch (err) {
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },

};
module.exports = staffCtrl;
