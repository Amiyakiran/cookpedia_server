const savedrecipes = require("../model/savedRecipeModel")


//add recipes
exports.addSavedRecipesController = async(req, res)=>{
    const {id , name , cuisine, image} = req.body 
    const userId = req.payload
    try {
        const existingRecipe = await savedrecipes.findOne({recipeId:id ,userId })
        if(existingRecipe){
            res.status(406).json('Reciped already in your saved collection')
        }
        else{
            const newRecipe = new savedrecipes({
                recipeId:id,
                name,
                cuisine,
                image,
                userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//get all saved recipes
exports.getAllSAVEDrECIPES = async(req,res)=>{
    const userId = req.payload
    try {
        const allSavedRecipes = await savedrecipes.find({userId})
        res.status(200).json(allSavedRecipes)
        
    } catch (error) {
        res.status(401).json(error)
    }
}
//remove recipe
exports.removeRecipeController = async(req, res)=>{
    const {id} = req.params 
    try {
        const removeRecipe = await savedrecipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeRecipe)
        
    } catch (error) {
        res.status(401).json(error)
    }
}