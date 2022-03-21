const db = require("../models");
const Event = db.events;
const Op = db.Sequelize.Op;

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
  const type = req.query.event_type;
  var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  Event.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving events."
      });
    });
};

// Find a single Event with an id
// exports.findOne = (req, res) => {

// };
