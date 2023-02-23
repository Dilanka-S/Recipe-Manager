const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Defining the db model schema for the Recipes with properties as defined in the specification
const recipeSchema = new Schema({
    id: {
        type: String,
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
    }
})
// exporting the created Recipe db model
module.exports = mongoose.model("Recipe", recipeSchema);
