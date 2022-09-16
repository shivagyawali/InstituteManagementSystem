const router = require("express").Router();
const courseCtrl = require("../controllers/courseCtrl");
const auth = require("../middleware/auth");
const authInstitute = require("../middleware/authInstitute");


router.get("/", auth, authInstitute, courseCtrl.myCourses);
router.post("/create", auth,authInstitute, courseCtrl.add);
router.get("/:id", auth,authInstitute, courseCtrl.course);
router.put("/:id", auth, authInstitute, courseCtrl.update);
router.delete("/:id", auth, authInstitute, courseCtrl.delete);

module.exports = router;
