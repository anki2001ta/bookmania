const express= require("express")
const app=express()
const {connection}=require("./Configs/db")
app.use(express.json())






app.listen(4500,async()=>{
  try{
    await connection
    console.log("connected to db")
  }
  catch(err){
    console.log(err)
  }
  console.log("Running on port 4500")
})