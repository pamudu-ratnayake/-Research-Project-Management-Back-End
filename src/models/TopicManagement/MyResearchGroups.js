const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MyResearchGroups = new Schema({

  topic_name: {
    type: String,
    required: true,
  },

  group_id: {
    type: String,
    required: true,
  },

  topic_description: {
    type: String,
    required: true,
  },

  group_members_id: {
    type: Array,
    required: true,
  }
  
});

const MyResearchGroup = mongoose.model("MyResearchGroups", MyResearchGroups);

module.exports = MyResearchGroups;
