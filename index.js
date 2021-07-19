const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`app is running on port: ${PORT}`);
});
