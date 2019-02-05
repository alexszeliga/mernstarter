const express = require("express");
const app = express();
const port = 3000;

// TODO: modularize routing
app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(port);
