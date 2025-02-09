import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000', // Specify the allowed origin
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));

import Signup from './route/signup.router';
import Signin from './route/signin.router';
import Dashboard from './route/dashboerd.router';

app.use('/signup', Signup);
app.use('/login', Signin);
app.use('/dashboard', Dashboard);

app.all('*', (req: Request, res: Response) => {
  console.log(req.body);
  console.log('cc', req.cookies);
  res.status(403).send('not found');
});

const port = 4000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
