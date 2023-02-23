 const express = require("express");
 const router = express.Router();
 const Recipe = require("../model/recipe"); 
 const recipesController = require("../controllers/recipe-controller");
 // Route to provide the recipes
router.get("/", recipesController.getAllRecipes);
router.post("/",recipesController.addRecipe);
router.get("/:id",recipesController.getById);
router.put("/:id",recipesController.updateRecipe);
router.delete("/:id",recipesController.deleteRecipe);
 // Exporting the created route
 module.exports = router;


