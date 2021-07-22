const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

const Recipe = {};

Recipe.get = async () => {
  const query = "select * from recipes";
  const results = await sendAsyncReqToDb(query);
  return results;
};

Recipe.add = async (data) => {
  const { title, user, image, category, postup } = data;
  const query = `insert into recipes (title, created_at, created_user, image, category, postup)
  values('${title}', CURRENT_TIMESTAMP(), '${user}','${image}', '${category}', '${postup}')`;
  const results = await sendAsyncReqToDb(query);
  return results;
};

Recipe.update = async (data) => {
  const { title, user, image, category, postup, id } = data;
  const query = `update recipes set title='${title}', created_user='${user}', image='${image}', category='${category}', postup='${postup}' where id=${id}`;
  const results = await sendAsyncReqToDb(query);
  return results;
};

module.exports = Recipe;

function sendAsyncReqToDb(query) {
  return new Promise((res, rej) => {
    connection.query(query, function (err, results) {
      if (err) rej(err);
      res(results);
    });
  });
}
