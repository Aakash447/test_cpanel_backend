const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "in get / Hello this a starting endpoint",
  });
});

app.listen(() => {
  console.log(`Server is started `);
});
