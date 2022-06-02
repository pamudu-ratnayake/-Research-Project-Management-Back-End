const router = require("express").Router();
const auth = require("../../middlewares/UserAuth");

let StudentDetails = require("../../controllers/StudentControllers/StudentController");

router.post("/addStudentiDetails", StudentDetails.postStudentDetails);
router.get("/getStudentDetails", auth, StudentDetails.getStudentDetails);
router.put("/updateStudentDetails/:student_id", auth, StudentDetails.updateStudentDetails);
router.delete("/deletStudentDetails/:student_id", auth, StudentDetails.deleteStudent);
router.get("/getOneStudentDetails/:student_id", auth, StudentDetails.getOneStudentDetail);

module.exports = router;