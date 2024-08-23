//require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
  path:'./env'
})

connectDB()


















//Connecting With the Database:
//First Approach to connect with the database:
/*
import express from "express"

const app=express()


//this is known as effie function which means it is executed directly after the function ends;
;(async()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("ERR: ",error);
      throw error
    })
    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  }
  catch(error){
    console.log('ERROR: ',error)
    throw err
  }
})()
  */