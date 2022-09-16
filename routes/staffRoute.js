const router = require("express").Router();
const staffCtrl = require("../controllers/staffCtrl");
const auth = require("../middleware/auth");
const authInstitute = require("../middleware/authInstitute");

router.get("/", auth, authInstitute, staffCtrl.myStaffs);
router.post("/create", auth, authInstitute, staffCtrl.add);
router.get("/:id", auth, authInstitute, staffCtrl.staff);
router.put("/:id", auth, authInstitute, staffCtrl.update);
router.delete("/:id", auth, authInstitute, staffCtrl.delete);



module.exports = router;