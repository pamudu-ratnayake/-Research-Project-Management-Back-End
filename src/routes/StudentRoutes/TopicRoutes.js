const router = require("express").Router();
const auth = require("../../middlewares/UserAuth");

let TopicDetails = require("../../controllers/StudentControllers/TopicController");

router.post("/addTopiciDetails", auth, TopicDetails.postTopicDetails);

module.exports = router;