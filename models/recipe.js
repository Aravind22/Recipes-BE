const mongoose = require('mongoose')

const schema  = mongoose.Schema({
    name: String,
    ingredients: [
        {
            name: String,
            amounnt: Number,
            measurement: String,
            mainIngredient: Boolean
        }
    ],
    instructions: [String]
})

module.exports = mongoose.model("recipeModel", schema, 'recipies')