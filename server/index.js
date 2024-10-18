import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
// import adminRoutes from './routes/admin.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO_CONNECT)
.then(()=>console.log("Database connected.."))
.catch((err)=>console.log(err))

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from the frontend
}));

app.use(cookieParser)

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
// app.use("/api/admin",adminRoutes)



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })    
})