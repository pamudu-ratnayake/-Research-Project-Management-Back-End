const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResultSheet = new Schema({

    title: {
        type: String,
        required: true
    },
    result_sheet: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});

const ResultSheets = mongoose.model("ResultSheets", ResultSheet);

module.exports = ResultSheets;
