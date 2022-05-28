const router = require("express").Router();
let StudentDetails = require("../../controllers/StudentControllers/StudentController");

router.post("/addStudentiDetails", StudentDetails.postStudentDetails);
router.get("/getStudentDetails", StudentDetails.getStudentDetails);
router.put("/updateStudentDetails/:student_id", StudentDetails.updateStudentDetails);
router.delete("/deletStudentDetails/:student_id", StudentDetails.deleteStudent);
router.get("/getOneStudentDetails/:student_id", StudentDetails.getOneStudentDetail);

module.exports = router;