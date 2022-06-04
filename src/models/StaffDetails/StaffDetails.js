const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StaffDetailsSchema = new Schema({
  staff_userName: {
    type: String,
    required: true,
  },
  staff_FName: {
    type: String,
    required: true,
  },
  staff_LName: {
    type: String,
    required: true,
  },
  staff_nic: {
    type: String,
    required: true,
  },
  staff_gender: {
    type: String,
    required: false,
  },
  staff_faculty: {
    type: String,
    required: false,
  },
  staff_address: {
    type: String,
    required: true,
  },
  staff_contact_no: {
    type: String,
    required: true,
  },
  staff_email: {
    type: String,
    required: true,
  },
  staff_type: {
    type: String,
  },
});

const staff = mongoose.model("StaffMember", StaffDetailsSchema);

module.exports = staff;
