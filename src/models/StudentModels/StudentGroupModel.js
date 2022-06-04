const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentGroupDetails = new Schema({
  // group_name: {
  //   type: String,
  //   required: true,
  // },
  // members: {
  //   type: Array,
  //   required: true,
  // }
  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"staffmembers"
    // required: true,
  },
  members:[
    {
      std_name:
        {
            type:String,
            required:true
        },
      std_id:
        {
            type:String,
            required:true
        },
        reg_No:
        {
            type:String,
            required:true
        },
        academic_email:
        {
            type:String,
            required:true
        },
        personal_email:
        {
            type:String,
            required:true
        },
        contact_No:
        {
            type:String,
            required:true
        }
    }
]

});

const StudentGroup = mongoose.model("StudentGroup", StudentGroupDetails);

module.exports = StudentGroup;