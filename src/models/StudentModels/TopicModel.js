const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TopicDetails = new Schema({
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  supervisors: {
    type: Array,
    required: true,
  },
  co_supervisors: {
    type: Array,
    required: true,
  }
});

const Topic = mongoose.model("Topic", TopicDetails);

module.exports = Topic;