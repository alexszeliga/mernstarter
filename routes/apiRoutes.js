const db = require("../models");
module.exports = function(app) {
  // Get all posts
  // TODO: Make this work
  app.get("/api/posts", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
};
