let Student = require("../../models/StudentModels/StudentModel");

exports.postStudentDetails = (req, res, next) => {
    const Name = req.body.Name;
    const Registration_no = req.body.Registration_no;
    const Faculty = req.body.Faculty;
    const Email = req.body.Email;
    const Gender = req.body.Gender;
    const Date_of_birth = req.body.Date_of_birth;
    const address = req.body.address;
    const contact_No = req.body.contact_No;

    const newStudentDetails = new Student({
        Name,
        Registration_no,
        Faculty,
        Email,
        Gender,
        Date_of_birth,
        address,
        contact_No
    });

    newStudentDetails.save()
    .then(() => {
        res.json("Student Details Added Successfully!");
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.getStudentDetails = (req, res, next) => {
  Student.find()
    .then((student) => {
        res.json(student);
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.updateStudentDetails = async (req, res) => {
    let student_id = req.params.student_id;
    const {Name, Registration_no, Faculty, Email, Gender, Date_of_birth, address, contact_No} = req.body;

    const studentUpdate = {
        Name,
        Registration_no,
        Faculty,
        Email,
        Gender,
        Date_of_birth,
        address,
        contact_No
    };

    const update = await Student.findByIdAndUpdate(student_id, studentUpdate)
    .then(() => {
        res.status(200).send({ status: "Student Details Updated!" });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error! Cannot Update!" });
        console.log(err.message);
      });
}

exports.deleteStudent = async (req, res) => {
    let student_id = req.params.student_id;
  
    await Student.findByIdAndDelete(student_id)
      .then(() => {
        res.status(200).send({ status: "Student Details Deleted!" });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error! Cannot Delete!" });
        console.log(err.message);
      });
  };

  exports.getOneStudentDetail = async (req, res) => {
    let student_id = req.params.student_id;
  
    await Student.findOne({ _id: student_id })
      .then((student) => {
        res.json(student);
      })
      .catch((err) => {
        console.log(err);
      });
  };