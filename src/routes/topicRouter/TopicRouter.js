const router = require("express").Router();

let topic = require("../../controllers/ResearchControllers/TopicController");


router.post("/addtopics", topic.postResearchtopics);

module.exports = router;
