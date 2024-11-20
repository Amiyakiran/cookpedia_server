const recipes = require("../model/recipeModel")



exports.getAllRecipesController = async(req,res)=>{
   try {
    const allRecipes = await recipes.find()
    res.status(200).json(allRecipes)
    
   } catch (error) {
    res.status(401).json(error)
   }
}