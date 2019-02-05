var db = require("../models");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.send("Hello World");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.send("404");
  });
};
