const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Templates = new Schema({

    template_title: {
        type: String,
        required: true
    },
    template: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});

const AllTemplates = mongoose.model("Templates", Templates);

module.exports = AllTemplates;
