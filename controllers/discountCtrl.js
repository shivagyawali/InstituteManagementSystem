const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const discountCtrl = {
  allDiscounts: async (req, res) => {
    try {
      await prisma.discount
        .findMany({})
        .then((discounts) => {
          res.json(discounts);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  discount: async (req, res) => {
    try {
      const { id } = req.params;
      const discount = await prisma.discount.findFirst({
        where: { id: id },
      });
      res.json(discount);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },

  add: async (req, res) => {
    try {
      const { discount_type, percent } = req.body;
      if (!discount_type)
        return res.status(400).json({ msg: "Name Field is required" });
      const discount = await prisma.discount.findFirst({
        where: { discount_type: discount_type },
      });
      if (discount) {
        return res.status(400).json({ msg: "This discount already exists." });
      }
      const user = await prisma.discount.create({
        data: {
          discount_type: discount_type,
          percent: percent,
        },
      });
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { discount_type, percent } = req.body;

      const discount = await prisma.discount.findFirst({
        where: { discount_type: discount_type, percent: percent },
      });

      if (discount !== null) {
        return res.status(400).json({ msg: "This discount already exists." });
      }

      const updatedDiscount = await prisma.discount.update({
        where: { id: id },
        data: {
          discount_type: discount_type,
          percent: percent,
        },
      });
      res.json(updatedDiscount);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedDiscount = await prisma.discount.delete({
        where: { id: id },
      });
      res.json({
        msg: `${deletedDiscount.discount_type} is deleted !!`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
};

module.exports = discountCtrl;
