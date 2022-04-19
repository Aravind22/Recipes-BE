const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const recipeModel = require('./models/recipe')
var cors = require('cors')
require('./db')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors())
const port = 3001

app.get('/recipes', async(req,res)=>{
    const recipes = await recipeModel.find()
    res.send(recipes)
})

app.get('/recipe', async(req,res) => {
    if(!req.query.id) res.send("No Recipe found!")
    else {
        const recipies = await recipeModel.find({'_id': req.query.id})
        res.send(recipies)
    }
})

app.post('/addRecipe', async(req,res)=>{
    const Recipe = new recipeModel({
        name:req.body.name,
        ingredients:req.body.ingredients,
        instructions:req.body.instructions
    })
    await Recipe.save()
    if(Recipe._id) res.send(Recipe.name + " added")
    else res.send("Some error occurred, please try again after some time")
})

app.post('/findRecipies', async(req,res)=>{
    const recipies = await recipeModel.find({'ingredients.name':{ "$all" : req.body.ingredients}})
    res.send(recipies)
})

app.listen(port, ()=>{
    console.log("Server started in port: ", port)
})