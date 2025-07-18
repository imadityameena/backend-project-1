
import express from 'express';
import connectDB from './db/index.js';
import dotenv from 'dotenv';



const app = express();


dotenv.config({
  path: './.env'
})





connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
    
  })
})

.catch((err) => {
  console.log("MONGO db connection failed !!!", err);
  
})



//This is a basic approach to connnect database but not professional
/*
( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error
      
    })
    
  } catch (error) {
    console.log("ERROR:", error);
    throw error
    
    
  }
})()


*/
