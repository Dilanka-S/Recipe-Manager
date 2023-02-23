const Recipe = require("../model/recipe");

const getAllRecipes = async(req,res,next)=>{
    let recipes;  
    try{
        recipes = await Recipe.find();
        console.log("Found recipes!")
    }catch(err){
        console.log(err); 
    }
    if(!recipes){
        // Error message if any recipes are not found
        return res.status(404).json({ message:"No recipes found, i dunno why!"});
    }
    //returing all availble recipes
    return res.status(200).json({ recipes });
}; 

const addRecipe = async(req,res,next)=>{
    const {id, name, ingredients, description} = req.body;
    let recipe;
    try{
        recipe = new Recipe({
            id,
            name,
            ingredients,
            description 
        });
        await recipe.save(); 
    }catch(error){
        console.log(error);
    }
    if (!recipe){
        return res.status(500).json({message:'Unable to add recipe!'});
    }
    return res.status(200).json({recipe});
}
exports.getAllRecipes = getAllRecipes;
exports.addRecipe = addRecipe;