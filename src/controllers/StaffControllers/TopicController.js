let topic = require("../../models/TopicManagement/MyResearchGroups");

exports.postResearchtopics = (req, res, next) => {
    const topic_name = req.body.topic_name;
    const group_id = req.body.group_id;
    const topic_description = req.body.topic_description;
    const group_members_id = req.body.group_members_id;

    const newResearchtopics = new topic({
        topic_name,
        group_id,
        topic_description,
        group_members_id
    });

    newResearchtopics.save()
    .then(() => {
        res.json("Hotel Reserved Successfully!");
    })
    .catch((err) => {
        console.log(err);
    })
};