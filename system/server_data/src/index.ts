import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials : true
 }

app.use(cors(corsOptions));

app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;



import Depart from './route/Department.Route';
import Class from './route/Class.Router';
import Course from './route/Course.Router';
import Teacher from './route/Teacher.Router'

app.use('/depart',Depart);
app.use('/class',Class);
app.use('/course',Course);
app.use('/teacher',Teacher);


app.get('*', (req, res) => {
  res.status(403).json(`not found`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
