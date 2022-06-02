const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userManagement = new Schema({

    user_type:{
        type:String,
        required: true,
    },
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    faculty:{
        type:String,
        required: true,
    },
    reg_no: {
        type:String,
        required: true,
    }

});

const Users = mongoose.model("Users", userManagement);

module.exports = Users;
