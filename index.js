const express = require("express");
const app = express();
const mysql = require("mysql2");

require("dotenv").config();

const PORT = process.env.PORT;

app.get("/recipes-app/api/recipes", async (req, res) => {
  const data = await getData("SELECT * FROM recipes");
  res.json(data);
});

function getData(query) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "recipesApp",
  });
  return new Promise(function (res, rej) {
    connection.query(query, function (err, results, fields) {
      if (err) rej(err);

      res(results);
    });
  });
}

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`app is running on port: ${PORT}`);
});
