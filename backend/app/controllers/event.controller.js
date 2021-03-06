const Event = require("../models/event.model.js");

exports.findAll = (req, res) => {
  // const title = req.query.title;
  Event.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving events."
      });
    else res.send(data);
  });
};
