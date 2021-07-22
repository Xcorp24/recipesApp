const express = require("express");
const router = express.Router();
const {
  insertRecipe,
  getRecipes,
  updateRecipe,
} = require("../controllers/recipes");

router.get("/recipes", getRecipes);

router.post("/recipes", insertRecipe);

router.put("/recipes", updateRecipe);

module.exports = router;
