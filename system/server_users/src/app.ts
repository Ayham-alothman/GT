import express from "express"; 
import dotenv from 'dotenv';

const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.status(200).send('runing server')
})

const port =4000;

app.listen(port,()=>{console.log(`runing on port ${port}`)})