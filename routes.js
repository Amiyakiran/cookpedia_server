const express = require('express')
const recipeController = require('./controller/recipeController')
const testimonialController = require('./controller/testimonalController')
const userController = require('./controller/userController')
const jwt = require('./middleware/jwtmiddleware')
const downloadController = require('./controller/downloadController')
const router = new express.Router()

//path to get all recipes 
router.get('/all-recipes', recipeController.getAllRecipesController )

//path to add testimonials
router.post('/add-testimonal', testimonialController.addTestimonialsController)

//path to register
router.post('/register-user', userController.registerController)


//path to login
router.post('/login-user', userController.loginController)

//path to get a particular recipe
router.get('/recipe-details/:id',jwt ,recipeController.getARecipeController)

//path to download recipe
router.post('/recipes/:recipeId/download',jwt, downloadController.addDownloadControllers)


module.exports = router