const router = require("express").Router();
let PanelMembers = require("../../controllers/admin/PanelMembersController");
let PublishedSubmissions = require("../../controllers/admin/CreateSubmissionController");

const auth = require("../../middlewares/UserAuth");

//------- Panel Routes-----------

router.post("/create-panel", auth, PanelMembers.createPanel);
router.get("/getall-panel", auth, PanelMembers.getAllPanel);
router.put("/update-panel", auth, PanelMembers.updatePanel);
router.delete("/delete-panel", auth, PanelMembers.deletePanel);
router.get("/getone-panel", auth, PanelMembers.getOnePanel);

//-------- Submit Routes----------
router.post("/create-submit", auth, PublishedSubmissions.createSubmit);
router.get("/getall-submit", auth, PublishedSubmissions.getAllSubmit);
router.put("/update-submit", auth, PublishedSubmissions.updateSubmit);
router.delete("/delete-submit", auth, PublishedSubmissions.deleteSubmit);
router.get("/getone-submit", auth, PublishedSubmissions.getOneSubmit);

module.exports = router;