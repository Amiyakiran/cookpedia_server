const mongoose = require('mongoose')

const savedRecipesSchema = new mongoose.Schema({
    recipeId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },

})

const savedrecipes = mongoose.model('savedrecipes', savedRecipesSchema)

module.exports = savedrecipes