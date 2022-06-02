let staff = require("../../models/StaffDetails/StaffDetails.js");


//---post-----------
exports.postMemberDetails = (req, res, next) => {
  const staff_userName = req.body.staff_userName;
  const staff_FName = req.body.staff_FName;
  const staff_LName = req.body.staff_LName;
  const staff_nic = req.body.staff_nic;
  const staff_gender = req.body.staff_gender;
  const staff_address = req.body.staff_address;
  const staff_contact_no = req.body.staff_contact_no;
  const staff_email = req.body.staff_email;
  const staff_type = req.body.staff_type;
  

  const newstaffMember = new staff({
    staff_userName,
    staff_FName,
    staff_LName,
    staff_nic,
    staff_gender,
    staff_address,
    staff_contact_no,
    staff_email,
    staff_type,
    
  });

  newstaffMember
    .save()
    .then(() => {
      res.json("Member Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//----GET----
exports.getStaffMembers = (req, res, next) => {
  staff.find()
    .then((staff) => {
      res.json(staff);
    })
    .catch((err) => {
      console.log(err);
    });
};

//----------update-------------
exports.updateStaffMembers = async (req, res) => {
  let staff_id = req.params.staff_id;
  const { staff_userName, staff_FName, staff_LName, staff_nic, staff_gender, staff_address, staff_contact_no, staff_email, staff_type } = req.body;

  const staffMemberUpdate = {
    staff_userName,
    staff_FName,
    staff_LName,
    staff_nic,
    staff_gender,
    staff_address,
    staff_contact_no,
    staff_email,
    staff_type,
  };

  const update = await staff.findByIdAndUpdate(staff_id, staffMemberUpdate)
    .then(() => {
      res.status(200).send({ status: "Member Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

//---------DELETE member--------
exports.deleteStaffMember = async (req, res) => {
  let staff_id = req.params.staff_id;

  await staff.findByIdAndDelete(staff_id)
    .then(() => {
      res.status(200).send({ status: "Member Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

//---------GET One Customer------------------
exports.getOneStaffMember = async (req, res) => {
  let staff_id = req.params.staff_id;

  await staff.findOne({ _id : staff_id })
    .then((staffMember) => {
      res.json(staffMember);
    })
    .catch((err) => {
      console.log(err);
    });
};
