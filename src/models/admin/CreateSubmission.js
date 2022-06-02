const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PublishedSubmissions = new Schema({

    // user_type:{
    //     type:String,
    //     required: true,
    // },
    tile:{
        type:String,
        required: true,
    },
    due_date:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    }

});

const Submits = mongoose.model("PublishedSubmissions", PublishedSubmissions);

module.exports = Submits;
