module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    event_type: {
      type: Sequelize.STRING
    },
    visit_id: {
      type: Sequelize.INTEGER
    },
    timestamp: {
      type: Sequelize.DATE
    },
    caregiver_id: {
      type: Sequelize.INTEGER
    },
    care_recipient_id: {
      type: Sequelize.INTEGER
    },
    mood: {
      type: Sequelize.STRING
    }
  });
  return Event;
};

// {
//   "id": "decaa026-2ce5-49cb-aff9-92326b85a98c",
//     "event_type": "mood_observation",
//       "visit_id": "39b94aab-cc35-4874-807f-c23472aec663",
//         "timestamp": "2019-04-23T10:53:13+01:00",
//           "caregiver_id": "4786d616-259e-4d52-80f7-8cf7dc6d881a",
//             "care_recipient_id": "03f3306d-a4a3-4179-ab88-81af66df8b7c",
//               "mood": "okay",
// },
