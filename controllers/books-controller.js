const Recipe = require("../model/recipe");

const getAllRecipes = async(req,res,next)=>{
    let recipes;  
    try{
        recipes = await Recipe.find();
    }catch(error){
        console.log(error); 
    }
    if(!recipes){
        // Error message if any recipes are not found
        return res.status(404).json({
            message:"No recipes found!"
        });
    }
    return res.status(200).json({recipes});
} 

exports.getAllRecipes = getAllRecipes;