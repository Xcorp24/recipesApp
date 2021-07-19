const express = require("express");
const app = express();
const fn = require("./fn/fn");

require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.get("/recipes-app/api/recipes", async (req, res) => {
  const data = await fn.getData("SELECT * FROM recipes");
  res.json(data);
});
app.post("/recipes-app/api/recipes", async (req, res) => {
  const { title, user, image, category } = req.body;
  const query = `insert into recipes (title, created_at, created_user, image, category)
    values('${title}', CURRENT_TIMESTAMP(), '${user}','${image}', '${category}')`;
  const data = await fn.getData(query);
  res.json(data);
});

const PORT = process.env.PORT || 80;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`app is running on port: ${PORT}`);
});
