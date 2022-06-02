const router = require("express").Router();
let staffMember = require("../../controllers/StaffControllers/StaffDetailsControllers");

// const auth = require("../../middlewares/UserAuth");

//routes
router.post("/addStaffMember", staffMember.postMemberDetails);
router.get("/get-StaffMembers",  staffMember.getStaffMembers);
router.put("/update-StaffMember/:staff_id",staffMember.updateStaffMembers);
router.delete("/delet-StaffMember/:staff_id", staffMember.deleteStaffMember);
router.get("/getOneStaffMember/:staff_id", staffMember.getOneStaffMember);

module.exports = router;