import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoutes from './Routes/AuthRoutes.js';
import UserRoutes from './Routes/UserRoutes.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js'

mongoose.set('strictQuery', true);
const app = express();
////to serve images for publlic
app.use(express.static('public')) 
app.use('/images',express.static("images"))

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
 app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_DB,
{useNewUrlParser:true, useUnifiedTopology:true}
).
then(()=>app.listen(process.env.port,()=>
console.log(`Connected to ${process.env.port}`)))
.catch((error)=>console.log("error at port"));

//usage of routes
app.use('/auth', AuthRoutes)
app.use('/user', UserRoutes)
app.use('/post', PostRoute)
app.use('/upload', UploadRoute)