let Topic = require("../../models/StudentModels/TopicModel");
var ObjectId = require('mongodb').ObjectID;

exports.postTopicDetails = (req, res, next) => {
    const topic = req.body.topic;
    const description = req.body.description;
    const document = req.body.document;
    const supervisors = req.body.supervisors;
    const co_supervisors = req.body.co_supervisors;
    const research_grp_id = req.body.research_grp_id;

    const newTopicDetails = new Topic({
        topic,
        description,
        document,
        supervisors,
        co_supervisors,
        research_grp_id
    });

    newTopicDetails.save()
    .then(() => {
        res.json("Topic Details Added Successfully!");
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.getAllTopics = (req, res, next) => {
    let sup_id = req.params.sup_id;
    Topic.find({supervisors : sup_id})
      .then((topics) => {
          res.json(topics);
      })
      .catch((err) => {
          console.log(err);
      })
  };


  //------------ staff controllers --------------
exports.updateStatus = (req, res, next) => {
    let topic_id = req.params.topic_id;
    let sup_id = req.userId;
    Topic.updateOne({ _id : topic_id}, {$push : {accepted_supervisors : sup_id}})
      .then((topics) => {
          res.json("Status Updated!");
      })
      .catch((err) => {
          console.log(err);
      })
  };

exports.rejectTopic = (req, res, next) => {
    let topic_id = req.params.topic_id;
    let sup_id = req.userId;
    Topic.updateOne({ _id : topic_id}, {$pull : {supervisors : ObjectId(sup_id)}})
      .then((topics) => {
          res.json("Topic Rejected!");
      })
      .catch((err) => {
          console.log(err);
      });
  };

  exports.getAllTopics = (req, res, next) => {
    let sup_id = req.params.sup_id;
    Topic.find({supervisors : sup_id})
      .then((topics) => {
          res.json(topics);
      })
      .catch((err) => {
          console.log(err);
      })
  };

  exports.getAcceptedTopics = (req, res, next) => {
    let sup_id = req.params.sup_id;
    Topic.find({accepted_supervisors : sup_id})
      .then((topics) => {
          res.json(topics);
      })
      .catch((err) => {
          console.log(err);
      });
  };