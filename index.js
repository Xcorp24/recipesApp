const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));

/* ROUTES */
const recipesRoutes = require("./routes/recipes");
app.use("/recipes-app/api", recipesRoutes);

const PORT = process.env.PORT || 80;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`app is running on port: ${PORT}`);
});
