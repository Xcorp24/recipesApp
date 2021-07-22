/* const { getData } = require("../fn/fn"); */
const Recipe = require("../models/Recipe");
const errorMsg = {};

exports.insertRecipe = async (req, res) => {
  try {
    const data = await Recipe.add(req.body);
    res.json(data);
  } catch (err) {
    errorMsg.status = 400;
    errorMsg.message = "Nepodarilo sa vlozit data.";
    res.status(400);
    res.json(errorMsg);
  }
};

exports.getRecipes = async (req, res) => {
  try {
    const data = await Recipe.get();
    res.json(data);
  } catch (err) {
    errorMsg.status = 400;
    errorMsg.message = "Nepodarilo sa ziskat data.";
    res.status(400);
    res.json(errorMsg);
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const data = await Recipe.update(req.body);
    res.json(data);
  } catch (err) {
    errorMsg.status = 400;
    errorMsg.message = "Nepodarilo sa upravit data.";
    res.status(400);
    res.json(errorMsg);
  }
};
