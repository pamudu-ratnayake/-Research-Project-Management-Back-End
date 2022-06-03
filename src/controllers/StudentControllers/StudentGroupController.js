let StudentGroup = require("../../models/StudentModels/StudentGroupModel");

exports.postStudentGroupDetails = (req, res, next) => {
    const members = req.body.members;
    const supervisor = req.body.supervisor;

    const newStudentGroupDetails = new StudentGroup({
        members,
        supervisor
    });

    // newStudentGroupDetails.members.push(std_name, reg_No, academic_email, personal_email, contact_No)
    newStudentGroupDetails.save()
    .then(() => {
        res.json("StudentGroup Details Added Successfully!");
    })
    .catch((err) => {
        console.log(err);
    })
};

// exports.getStudentGroupDetails = (req, res, next) => {
//   StudentGroup.find()
//     .then((StudentGroup) => {
//         res.json(StudentGroup);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// };

// exports.updateStudentGroupDetails = async (req, res) => {
//     let id = req.params.id;
//     const {group_id, group_name, members} = req.body;

//     const StudentGroupUpdate = {
//         group_id,
//         group_name,
//         members
//     };

//     const update = await StudentGroup.findByIdAndUpdate(id, StudentGroupUpdate)
//     .then(() => {
//         res.status(200).send({ status: "StudentGroup Details Updated!" });
//       })
//       .catch((err) => {
//         res.status(500).send({ status: "Error! Cannot Update!" });
//         console.log(err.message);
//       });
// }

// exports.deleteStudentGroup = async (req, res) => {
//     let StudentGroup_id = req.params.StudentGroup_id;
  
//     await StudentGroup.findByIdAndDelete(StudentGroup_id)
//       .then(() => {
//         res.status(200).send({ status: "StudentGroup Details Deleted!" });
//       })
//       .catch((err) => {
//         res.status(500).send({ status: "Error! Cannot Delete!" });
//         console.log(err.message);
//       });
//   };

//   exports.getOneStudentGroupDetail = async (req, res) => {
//     let StudentGroup_id = req.params.StudentGroup_id;
  
//     await StudentGroup.findOne({ _id: StudentGroup_id })
//       .then((StudentGroup) => {
//         res.json(StudentGroup);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };