const recipes = require("../model/recipeModel")



exports.getAllRecipesController = async(req,res)=>{
   try {
    const allRecipes = await recipes.find()
    res.status(200).json(allRecipes)
    
   } catch (error) {
    res.status(401).json(error)
   }
}

//getARecipe

exports.getARecipeController = async(req, res)=>{
   console.log('inside getARecipeController');
   
   const {id} = req.params 
   console.log(id);
   try {
      const recipe = await recipes.findOne({_id:id})
      if(!recipe){
         res.status(406).json('NO SUCH RECIPE')
      }
      else{
         res.status(200).json(recipe)
      }
      
   } catch (error) {
      res.status(401).json(error)
   }
   
}