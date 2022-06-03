const router = require("express").Router();
const auth = require("../../middlewares/UserAuth");

let StudentGroupDetails = require("../../controllers/StudentControllers/StudentGroupController");

router.post("/addStudentGroupiDetails",StudentGroupDetails.postStudentGroupDetails);
// router.get("/getStudentGroupDetails", auth, StudentGroupDetails.getStudentGroupDetails);
// router.put("/updateStudentGroupDetails/:studentGroup_id", auth, StudentGroupDetails.updateStudentGroupDetails);
// router.delete("/deletStudentGroupDetails/:studentGroup_id", auth, StudentGroupDetails.deleteStudentGroup);
// router.get("/getOneStudentGroupDetails/:studentGroup_id", auth, StudentGroupDetails.getOneStudentGroupDetail);

module.exports = router;