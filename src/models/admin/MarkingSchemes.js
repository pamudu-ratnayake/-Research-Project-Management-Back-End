const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MarkingScheme = new Schema({

    // user_type:{
    //     type:String,
    //     required: true,
    // },
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    marking_scheme:{
        type:String,
        required: true,
    }

});

const MarkingSchemes = mongoose.model("MarkingSchemes", MarkingScheme);

module.exports = MarkingSchemes;
