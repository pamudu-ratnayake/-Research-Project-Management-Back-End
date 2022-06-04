let ResultSheet = require("../../models/StaffDetails/ResultSheets")

exports.createResultSheet = (req, res, next) => {
    const title = req.body.title;
    const result_sheet = "http://localhost:8080/public/uploads/" + req.file.originalname;
    const description = req.body.description;
    
  
    const newResults = new ResultSheet({
      title,
      result_sheet,
      description
    });
  
    newResults
      .save()
      .then(() => {
        res.json("Result Sheet Created");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.getAllResultSheet = (req, res, next) => {
    ResultSheet.find()
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };