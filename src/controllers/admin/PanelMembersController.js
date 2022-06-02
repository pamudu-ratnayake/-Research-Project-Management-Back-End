let PanelMembers = require("../../models/admin/PanelMembers");

//-----POST-----------
exports.createPanel = (req, res, next) => {
  const panel_no = req.body.panel_no;
  const research_area = req.body.research_area;
  const no_of_members = req.body.no_of_members;
  const members = req.body.members;
  

  const newPanel = new PanelMembers({
    panel_no,
    research_area,
    no_of_members,
    members
  });

  newPanel
    .save()
    .then(() => {
      res.json("Panel Created");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllPanel = (req, res, next) => {
  PanelMembers.find()
    .then((members) => {
      res.json(members);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updatePanel = async (req, res) => {
  let panel_id = req.params.panel_id;
  const { panel_no, research_area, no_of_members, members } = req.body;

  const panelUpdate = {
    panel_no,
    research_area,
    no_of_members,
    members
  };

  const update = await PanelMembers.findByIdAndUpdate(panel_id, panelUpdate)
    .then(() => {
      res.status(200).send({ status: "Panel Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.deletePanel = async (req, res) => {
  let panel_id = req.params.panel_id;

  await PanelMembers.findByIdAndDelete(panel_id)
    .then(() => {
      res.status(200).send({ status: "Panel Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getOnePanel = async (req, res) => {
  let panel_id = req.params.panel_id;

  await PanelMembers.findOne({ panel_id })
    .then((panel) => {
      res.json(panel);
    })
    .catch((err) => {
      console.log(err);
    });
};
