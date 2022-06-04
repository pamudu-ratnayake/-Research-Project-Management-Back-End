let Marking = require('../../models/admin/MarkingSchemes')

exports.createMarking = (req, res, next) => {
    const title = req.body.title;
    const marking_scheme = "http://localhost:8080/public/uploads/" + req.file.originalname;
    const description = req.body.description;
  
    const newMarking = new Marking({
        title,
        marking_scheme,
        description
    });
  
    newMarking
      .save()
      .then(() => {
        res.json("Marking Created");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.getAllMarkings = (req, res, next) => {
    Marking.find()
      .then((marking) => {
        res.json(marking);
      })
      .catch((err) => {
        console.log(err);
      });
  };