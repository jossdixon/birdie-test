const sql = require("./db.js");
// constructor
const Event = function (event) {
  this.id = event.id,
  this.payload = event.payload
};

Event.getAll = (result) => {
  let query = "SELECT * FROM events LIMIT 10";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Events: ", res);
    result(null, res);
  });
};

module.exports = Event;
