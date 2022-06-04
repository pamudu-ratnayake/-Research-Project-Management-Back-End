let AllTemplates = require("../../models/admin/Templates")

exports.createTemplates = (req, res, next) => {
    const template_title = req.body.template_title;
    const template = "http://localhost:8080/public/uploads/" + req.file.originalname;
    const description = req.body.description;
    
  
    const newTemplate = new AllTemplates({
      template_title,
      template,
      description
    });
  
    newTemplate
      .save()
      .then(() => {
        res.json("Template Created");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.getAllTemplates = (req, res, next) => {
    AllTemplates.find()
      .then((templates) => {
        res.json(templates);
      })
      .catch((err) => {
        console.log(err);
      });
  };