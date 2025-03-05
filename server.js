import express, { Router } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoute.js'
import noteRoutes from './routes/noteRoute.js'
import cors from "cors";

// Confingure env 
dotenv.config();

// connect database
connectDB()

// rest object create
const app = express();
app.use('/public', express.static('public'));

app.use(cors());

// middlewarse
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth',userRoutes);
app.use('/api/v1/',noteRoutes)

// rest api
app.get('/',(re,res)=>{
    res.send("<h1> Welcome to Ecommerrce app</h1>");
});


// port 
const PORT = process.env.PORT;

// run listen
app.listen(PORT,()=>{
    console.log(`server Running on ${process.env.DEV_MODE} mode no port ${PORT}`.bgCyan.white);
})