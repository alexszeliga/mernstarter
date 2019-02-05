// import/require packages (don't forget to install these!)
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
// connect to MongoDB (mongod running? DB exist?)
mongoose.connect("mongodb://localhost/mernstarter", { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// no big URLs, assume it's JavaScript all the way down
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Requests go here
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// Serve the clients
app.listen(PORT);
