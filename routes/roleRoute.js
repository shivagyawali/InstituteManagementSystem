const router = require("express").Router();
const roleCtrl = require("../controllers/roleCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.get("/",auth,authAdmin, roleCtrl.allRoles);
router.post("/create",auth,authAdmin, roleCtrl.add);
router.get("/:id",auth,authAdmin, roleCtrl.role);
router.put("/:id",auth,authAdmin, roleCtrl.update);


module.exports = router;
 