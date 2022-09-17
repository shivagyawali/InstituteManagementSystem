const router = require("express").Router();
const discountCtrl = require("../controllers/discountCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.get("/", auth,  discountCtrl.allDiscounts);
router.post("/create", auth,  discountCtrl.add);
router.get("/:id", auth,  discountCtrl.discount);
router.put("/:id", auth,  discountCtrl.update);
router.delete("/:id", auth,  discountCtrl.delete);

module.exports = router;
