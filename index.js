const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

/* ROUTES */
const recipesRoutes = require("./routes/recipes");
app.use("/recipes-app/api", recipesRoutes);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`app is running on port: ${port}`);
});
