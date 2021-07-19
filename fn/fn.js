const mysql = require("mysql2");

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

module.exports = {
  getData,
};
