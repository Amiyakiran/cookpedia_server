const express = require('express')
const recipeController = require('./controller/recipeController')

const router = new express.Router()

//path to get all recipes 
router.get('/all-recipes', recipeController.getAllRecipesController )

module.exports = router