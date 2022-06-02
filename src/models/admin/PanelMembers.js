const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PanelMembers = new Schema({

    panel_no:{
        type:String,
        required: true,
    },
    research_area:{
        type:String,
        required: true,
    },
    no_of_members:{
        type: Number,
        required: true,
    },
    members: {
        type : Array,
        
        // type : mongoose.Schema.Types.ObjectId,
        // ref : "Staff"
    }

});

const Panel = mongoose.model("PanelMembers", PanelMembers);

module.exports = Panel;
