module.exports = app => {
  const events = require('../controllers/event.controller.js');
  var router = require("express").Router();

  //Retrieve all tutorials
  router.get("/", tutorials.findAll);
};
