const router = require("express").Router();
const auth = require("../../middlewares/UserAuth");

let TopicDetails = require("../../controllers/StudentControllers/TopicController");

router.post("/addTopiciDetails", auth, TopicDetails.postTopicDetails);


// ------- staff routes ---------------

router.get("/getTopiciDetails/:sup_id", auth, TopicDetails.getAllTopics);
router.get("/getAcceptedTopiciDetails/:sup_id", auth, TopicDetails.getAcceptedTopics);
router.post("/updateStatus/:topic_id", auth, TopicDetails.updateStatus);
router.post("/rejectTopic/:topic_id", auth, TopicDetails.rejectTopic);

//-------------------------------------

module.exports = router;