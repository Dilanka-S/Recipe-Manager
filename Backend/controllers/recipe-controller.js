const Recipe = require("../model/recipe");

// Function to retrieve all the recipes within the database at that moment
const getAllRecipes = async(req,res,next)=>{
    let recipes;  
    try{
        recipes = await Recipe.find();
        console.log ("Found recipes!")
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
// function to retrieve a recipe with a given object id
const getById = async(req,res,next)=>{
    const id = req.params.id;
    let recipe;
    try{
        recipe = await Recipe.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!recipe){
        // Error message if any recipes are not found
        return res.status(404).json({ message:"No recipes found matching the ID"});
    }
    return res.status(200).json({ recipe });
} 
// Function to add a new recipe to the database
const addRecipe = async(req,res,next)=>{
    const {recipeId, name, ingredients, description, recipeCover} = req.body;
    let recipe;
    try{
        recipe = new Recipe({
            recipeId,
            name,
            ingredients,
            description,
            recipeCover
        });
        await recipe.save(); 
    }catch(error){
        console.log(error);
    }
    if (!recipe){
        return res.status(500).json({message:'Unable to add recipe!'});
    }
    return res.status(201).json({recipe});
}
//  Function to update a given recipe with ID
const updateRecipe = async(res, req, next) =>{
    const {recipeId, name, ingredients, description, recipeCover} = req.body;
    const id = req.params.id;
    let recipe;
    try{
        recipe = await Recipe.findByIdAndUpdate(id,{
            recipeId,
            name,
            ingredients,
            description,
            recipeCover
        });
        recipe = await recipe.save(); 
    }catch(error){
        console.log(error);
    }
    if (!recipe){
        return res.status(500).json({message:'Unable to update recipe with this ID!'});
    }
    return res.status(201).json({recipe});

}
// function to delete a recipe with the given object ID
const deleteRecipe = async(req, res, next) => {
    const id = req.params.id;
    let recipe;
    try{
        recipe = await Recipe.findByIdAndRemove(id)
    }catch(err){
        console.log(err);
    }   if (!recipe){
        return res.status(500).json({message:'Unable to delete recipe with this ID!'});
    }
    return res.status(201).json({message: "The recipe with the given ID has been removed successfully"});   
}

exports.getAllRecipes = getAllRecipes;
exports.addRecipe = addRecipe;
exports.getById = getById;
exports.updateRecipe = updateRecipe;
exports.deleteRecipe = deleteRecipe;
