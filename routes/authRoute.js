const router = require("express").Router();
const authCtrl = require("../controllers/authCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.get("/users",auth, authAdmin, authCtrl.allUsers);
router.get("/logout", auth, authCtrl.logout);



module.exports = router;