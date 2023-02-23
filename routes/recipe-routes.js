 const express = require("express");
 const router = express.Router();
 const Recipe = require("../model/recipe"); 
 const recipesController = require("../controllers/books-controller");
 // Route to provide the recipes
router.get("/", recipesController.getAllRecipes);
 // Exporting the created route
 module.exports = router;

