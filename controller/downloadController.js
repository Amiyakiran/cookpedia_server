const downloads = require("../model/downloadModel");


exports.addDownloadControllers = async(req, res)=>{
console.log('addDownloadControllers');
const {recipeId} = req.params 

const {name , cuisine} = req.body 

try {
    const existingRecipe = await downloads.findOne({recipeId})
    if(existingRecipe){
     existingRecipe.count += 1
     await existingRecipe.save()
     res.status(200).json(existingRecipe)

    }else{
       const newRecipe = new downloads({
        recipeId,
        recipename:name,
        recipecuisine:cuisine,
        count :1
       })
       await newRecipe.save()
       res.status(200).json(newRecipe)
    }
    
} catch (error) {
    res.status(200).json(error)
}


}