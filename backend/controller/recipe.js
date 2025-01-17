const Recipes=require("../models/recipe")

const getRecipes = (req,res)=>{
    res.json({message:"hello"})
}

const getRecipe = (req,res)=>{
    res.json({message:"hello"})
}
const addRecipe =async (req,res)=>{
    const {title, ingredients, instructions, time}=req.body

    if(!title || !ingredients || !instructions){
        res.json({message:"Require field can't be empty"})
    }
    const newRecipe = await Recipes.create({
        title, ingredients, instructions, time
    })
    return res.json(newRecipe)
}
const editRecipe = (req,res)=>{
    res.json({message:"hello"})
}
const deleteRecipe = (req,res)=>{
    res.json({message:"hello"})
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}