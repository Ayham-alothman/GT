import express,{NextFunction, Request,Response} from "express"; 
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app=express();
dotenv.config();

app.use(bodyParser.json());


import Signup from './route/signup.router';
import Signin from './route/signin.router';

app.use('/signup',Signup);
app.use('/login',Signin);

app.all('*',(req:Request,res:Response)=>{console.log(req.body)
    res.status(403).send('not found')
})

const port =4000;

app.listen(port,()=>{console.log(`runing on port ${port}`)})    