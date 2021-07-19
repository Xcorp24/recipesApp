const express = require("express");
const router = express.Router();
const fn = require("../fn/fn");

router.get("/recipes", async (req, res) => {
  const data = await fn.getData("SELECT * FROM recipes");
  res.json(data);
});

router.post("/recipes", async (req, res) => {
  const { title, user, image, category, postup } = req.body;
  const query = `insert into recipes (title, created_at, created_user, image, category, postup)
      values('${title}', CURRENT_TIMESTAMP(), '${user}','${image}', '${category}', '${postup}')`;
  const data = await fn.getData(query);
  res.json(data);
});

router.put("/recipes", async (req, res) => {
  const { title, user, image, category, postup, id } = req.body;
  const query = `update recipes set title='${title}', created_user='${user}', image='${image}', category='${category}', postup='${postup}' where id=${id}`;
  const data = await fn.getData(query);
  res.json(data);
});

module.exports = router;
