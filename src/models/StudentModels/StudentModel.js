const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentDetails = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Registration_no: {
    type: String,
    required: true,
  },
  Faculty: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Date_of_birth: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact_No: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentDetails);

module.exports = Student;