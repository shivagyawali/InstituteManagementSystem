const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const feeCtrl = {
  allFees: async (req, res) => {
    try {
      await prisma.fee
        .findMany({})
        .then((fees) => {
          res.json(fees);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  fee: async (req, res) => {
    try {
      const { id } = req.params;
      const fee = await prisma.fee.findFirst({
        where: { id: id },
      });
      res.json(fee);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },

  add: async (req, res) => {
    try {
      const { phase, studentId, discountId,status,amount } = req.body;
      const fee = await prisma.fee.findFirst({
        where: { phase: phase,studentId:studentId },
      });
      if (fee) {
        return res.status(400).json({ msg: "This fee already exists." });
      }
      const user = await prisma.fee.create({
        data: {
          phase: phase,
          studentId: studentId,
          discountId: discountId,
          amount: amount,
          status: status,
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
       const { phase, studentId, discountId, status, amount } = req.body;
       const fee = await prisma.fee.findFirst({
         where: { phase: phase, studentId: studentId },
       });
       if (fee) {
         return res.status(400).json({ msg: "This fee already exists." });
       }
      

      const updatedFee = await prisma.fee.update({
        where: { id: id },
        data: {
          phase: phase,
          studentId: studentId,
          discountId: discountId,
          amount: amount,
          status: status,
        },
      });
      res.json(updatedFee);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedFee = await prisma.fee.delete({
        where: { id: id },
      });
      res.json({
        msg: `${deletedFee.phase} is deleted !!`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  },
};

module.exports = feeCtrl;
