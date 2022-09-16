const router = require("express").Router();
const instituteCtrl = require("../controllers/instituteCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.get("/", auth, authAdmin, instituteCtrl.allInstitute);
router.post("/create", auth, authAdmin, instituteCtrl.add);
router.get("/:id", auth, authAdmin, instituteCtrl.institute);
router.put("/:id", auth, authAdmin, instituteCtrl.update);
router.delete("/:id", auth, authAdmin, instituteCtrl.delete);

module.exports = router;
