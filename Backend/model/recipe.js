const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Defining the db model schema for the Recipes with properties as defined in the specification
const recipeSchema = new Schema({
    recipeId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type : String,
        required: true
    }

});
//hello
// exporting the created Recipe db model
module.exports = mongoose.model("Recipe", recipeSchema);
