import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/carRoute.js';

const app=express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const URL="mongodb+srv://ujjwal:ujjwal2023@mycluster.bed59i8.mongodb.net/carlay?retryWrites=true&w=majority"
// const PORT=process.env.PORT || 7000;
// const URL=process.env.MONGOURL;

mongoose.connect(URL)
.then(()=>{
    console.log("DB Connected Successfully");

    app.listen(8000,()=>{
        console.log(`App is listning on port 8000`);
    })
}).catch((error)=>console.log(error))

app.use('/api',route)