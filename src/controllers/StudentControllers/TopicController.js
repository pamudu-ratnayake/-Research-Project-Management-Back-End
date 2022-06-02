let Topic = require("../../models/StudentModels/TopicModel");

exports.postTopicDetails = (req, res, next) => {
    const topic = req.body.topic;
    const description = req.body.description;
    const document = req.body.document;
    const supervisors = req.body.supervisors;
    const co_supervisors = req.body.co_supervisors;

    const newTopicDetails = new Topic({
        topic,
        description,
        document,
        supervisors,
        co_supervisors
    });

    newTopicDetails.save()
    .then(() => {
        res.json("Topic Details Added Successfully!");
    })
    .catch((err) => {
        console.log(err);
    })
};
