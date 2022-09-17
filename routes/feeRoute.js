const router = require("express").Router();
const feeCtrl = require("../controllers/feeCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const authInstitute = require("../middleware/authInstitute");

router.get("/", auth,authInstitute, feeCtrl.allFees);
router.post("/create", auth,authInstitute, feeCtrl.add);
router.get("/:id", auth,authInstitute, feeCtrl.fee);
router.put("/:id", auth,authInstitute, feeCtrl.update);
router.delete("/:id", auth,authInstitute, feeCtrl.delete);

module.exports = router;
