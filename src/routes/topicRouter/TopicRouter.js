const router = require("express").Router();

let topic = require("../../controllers/StaffControllers/TopicController");


router.post("/addtopics", topic.postResearchtopics);

module.exports = router;
