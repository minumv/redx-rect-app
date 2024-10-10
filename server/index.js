import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECT)
.then(()=>console.log("Database connected.."))
.catch((err)=>console.log(err))

const app = express()

app.use(express.json())

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)