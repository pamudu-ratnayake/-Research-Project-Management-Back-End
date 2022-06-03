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
    // required: true,
  },
  supervisors: [{
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "staffmembers"
  }
  ],
  co_supervisors:[{
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "staffmembers"
  }
  ],
});

const Topic = mongoose.model("Topic", TopicDetails);

module.exports = Topic;