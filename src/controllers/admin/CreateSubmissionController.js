let PublishedSubmissions = require("../../models/admin/CreateSubmission");

//-----POST-----------
exports.createSubmit = (req, res, next) => {
  const title = req.body.title;
  const due_date = req.body.due_date;
  const description = req.body.description;
  

  const newSubmission = new PublishedSubmissions({
    title,
    due_date,
    description
  });

  newSubmission
    .save()
    .then(() => {
      res.json("Submissions Created");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllSubmit = (req, res, next) => {
  PublishedSubmissions.find()
    .then((links) => {
      res.json(links);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateSubmit = async (req, res) => {
  let link_id = req.params.link_id;
  const { title, due_date, description } = req.body;

  const submitUpdate = {
    title,
    due_date,
    description
  };

  const update = await PublishedSubmissions.findByIdAndUpdate(link_id, submitUpdate)
    .then(() => {
      res.status(200).send({ status: "Link Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.deleteSubmit = async (req, res) => {
  let link_id = req.params.link_id;

  await PublishedSubmissions.findByIdAndDelete(link_id)
    .then(() => {
      res.status(200).send({ status: "Link Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getOneSubmit = async (req, res) => {
  let link_id = req.params.link_id;

  await PublishedSubmissions.findOne({ link_id })
    .then((link) => {
      res.json(link);
    })
    .catch((err) => {
      console.log(err);
    });
};
