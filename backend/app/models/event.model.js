const sql = require("./db.js");
// constructor
const Event = function (event) {
  this.id = event.id,
  this.event_type = event.event_type,
  this.visit_id = event.visit_id,
  this.timestamp = event.timestamp,
  this.caregiver_id = event.caregiver_id,
  this.care_recipient_id = event.care_recipient_id,
  this.mood = event.mood
};

Event.getAll = (title, result) => {
  let query = "SELECT * FROM events";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("tutorials: ", res);
    result(null, res);
  });
};

module.exports = Event;
