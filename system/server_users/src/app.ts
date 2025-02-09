import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials : true
   }
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cookieParser());

<<<<<<< HEAD
app.use(function (req, res, next) {	
    res.setHeader('content-type','application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
    res.setHeader('Access-Control-Allow-Credentials', "true"); 
  
   
    next();
});

=======
const corsOptions = {
  origin: 'http://localhost:3000', // Specify the allowed origin
  credentials: true, // Allow credentials
};
>>>>>>> dashboard

app.use(cors(corsOptions));

import Signup from './route/signup.router';
import Signin from './route/signin.router';
import Dashboard from './route/dashboerd.router';

app.use('/signup', Signup);
app.use('/login', Signin);
app.use('/dashboard', Dashboard);

<<<<<<< HEAD
app.all('*',(req:Request,res:Response)=>{
    //console.log(JSON.stringify(req.body, null, 2));
    //console.log("cc",req.cookies)
    res.status(403).json(`Not ok`)
})
=======
app.all('*', (req: Request, res: Response) => {
  console.log(req.body);
  console.log('cc', req.cookies);
  res.status(403).send('not found');
});
>>>>>>> dashboard

const port = 4000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
