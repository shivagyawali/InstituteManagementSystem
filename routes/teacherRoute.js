const router = require("express").Router();
const teacherCtrl = require("../controllers/teacherCtrl");
const auth = require("../middleware/auth");
const authInstitute = require("../middleware/authInstitute");

router.get("/", auth, authInstitute, teacherCtrl.myTeachers);
router.post("/create", auth, authInstitute, teacherCtrl.add);
router.get("/:id", auth, authInstitute, teacherCtrl.teacher);
router.put("/:id", auth, authInstitute, teacherCtrl.update);
router.put(
  "/:id/:courseId",
  auth,
  authInstitute,
  teacherCtrl.deleteCoursesOfTeacher
);
router.put(
  "/add/course/:teacherId",
  auth,
  authInstitute,
  teacherCtrl.addCoursesToTeacher
);
router.delete("/:id", auth, authInstitute, teacherCtrl.delete);

module.exports = router;
