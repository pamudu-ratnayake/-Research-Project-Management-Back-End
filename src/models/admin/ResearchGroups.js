const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FinalResearchGroups = new Schema({

    students: {
        
    }

});

const ResearchGroups = mongoose.model("FinalResearchGroups", FinalResearchGroups);

module.exports = ResearchGroups;
