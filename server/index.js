import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECT)
.then(()=>console.log("Database connected.."))
.catch((err)=>console.log(err))

const app = express()

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})