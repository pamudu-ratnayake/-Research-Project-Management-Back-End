const router = require("express").Router();
let PanelMembers = require("../../controllers/admin/PanelMembersController");
let PublishedSubmissions = require("../../controllers/admin/CreateSubmissionController");
let Template = require("../../controllers/admin/TemplateController")

const auth = require("../../middlewares/UserAuth");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../../../../../SLIIT 3rd Year 2nd Sem/AF/Research Project Management/server/public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//------- Panel Routes-----------

router.post("/create-panel", auth, PanelMembers.createPanel);
router.get("/getall-panel", auth, PanelMembers.getAllPanel);
router.put("/update-panel/:panel_id", auth, PanelMembers.updatePanel);
router.delete("/delete-panel/:panel_id", auth, PanelMembers.deletePanel);
router.get("/getone-panel/:panel_id", auth, PanelMembers.getOnePanel);

//-------- Submit Routes----------
router.post("/create-submit", auth, PublishedSubmissions.createSubmit);
router.get("/getall-submit", auth, PublishedSubmissions.getAllSubmit);
router.put("/update-submit/:link_id", auth, PublishedSubmissions.updateSubmit);
router.delete("/delete-submit/:link_id", auth, PublishedSubmissions.deleteSubmit);
router.get("/getone-submit/:link_id", auth, PublishedSubmissions.getOneSubmit);

router.post("/create-template", upload.single("file"), Template.createTemplates);
router.get("/get-template", Template.getAllTemplates);

module.exports = router;