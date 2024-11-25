const express = require('express')
const recipeController = require('./controller/recipeController')
const testimonialController = require('./controller/testimonalController')
const userController = require('./controller/userController')
const router = new express.Router()

//path to get all recipes 
router.get('/all-recipes', recipeController.getAllRecipesController )

//path to add testimonials
router.post('/add-testimonal', testimonialController.addTestimonialsController)

//path to register
router.post('/register-user', userController.registerController)


//path to login
router.post('/login-user', userController.loginController)

module.exports = router