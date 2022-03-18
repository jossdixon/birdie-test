module.exports = {
  HOST: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
  USER: "test-read",
  PASSWORD: "xnxPp6QfZbCYkY8456",
  DB: "birdietest",
  dialect: "mysql",
  table: "events",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
