const router = require("express").Router();
const auth = require("../../middlewares/UserAuth");

const {login, signup, getUser} = require("../../controllers/admin/UserManagementController");

router.post("/login", login);
router.post("/signup", signup);
router.get("/get-oneuser", auth, getUser);

module.exports = router;