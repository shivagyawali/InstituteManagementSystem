const router = require("express").Router();
const studentCtrl = require("../controllers/studentCtrl");
const auth = require("../middleware/auth");
const authInstitute = require("../middleware/authInstitute");

router.get("/", auth, authInstitute, studentCtrl.myStudents);
router.post("/create", auth, authInstitute, studentCtrl.add);
router.get("/:id", auth, authInstitute, studentCtrl.student);
router.put("/:id", auth, authInstitute, studentCtrl.update);
router.put(
  "/:id/:courseId",
  auth,
  authInstitute,
  studentCtrl.deleteCoursesOfStudent
);
router.put(
  "/add/course/:studentId",
  auth,
  authInstitute,
  studentCtrl.addCoursesToStudent
);
router.delete("/:id", auth, authInstitute, studentCtrl.delete);

module.exports = router;
