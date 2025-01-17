require("dotenv").config()
const express = require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDb")

const PORT = process.env.PORT || 3000
connectDb();

app.use(express.json())

//for api testing we are using Thunder client
// app.get("/",(req,res)=>{
//     res.json({message:"hello"})
// })

app.use("/recipe", require("./routes/recipe"))

//listening to server port
app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})