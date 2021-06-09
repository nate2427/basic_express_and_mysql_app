// import the express package into the code
const express = require("express");
const sequelize = require("./config/connection");

// creating the express app
const app = express();
// creating a variable to hold port number
const port = 8594;

// simple get request
app.get("/", (req, res) => {
  res.json({ message: "Success" });
});

// connect to mysql db
sequelize.sync().then(() => {
  // connected to the db successful
  console.log("connected to the db successfully\n");
  // start the app up, and pass in the port that app is listening
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
