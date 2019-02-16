const db = require("../models");
module.exports = function(app) {
  // Get all posts
  // TODO: Make this work
  app.get("/api/posts", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
  app.get("/api/new-user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
