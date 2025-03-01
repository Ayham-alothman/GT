import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';



const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials : true
 }

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const PORT = process.env.PORT || 4001;


const storage = multer.memoryStorage(); // Use memory storage to store files in memory
const upload = multer({ storage });



import Depart from './route/Department.Route';
import Class from './route/Class.Router';
import Course from './route/Course.Router';
import Teacher from './route/Teacher.Router';
import Semster from './route/Semster.Router'

app.use('/depart',Depart);
app.use('/class',Class);
app.use('/course',Course);
app.use('/teacher',Teacher);
app.use('/semster',upload.single('file'),Semster);







import { Request,Response } from 'express';
import { TableModel } from './model/schema/Table.Schema';
import mongoose,{connect} from 'mongoose';


app.use('/savefile', upload.single('file'),(req:Request,res:Response)=>{
  //console.log(req.headers);
  //console.log(req.file?.buffer); 
  //console.log(req.body);   
  //res.status(200).end();
  console.log('set req')

   const store= async()=>{
    try{
      await connect('mongodb://localhost:27017/GT_Data');
      const table=await new TableModel({file:req.file?.buffer}).save();
      console.log(`done`)
      res.status(200).json(table).end();

    }
    catch(e){console.log(e)}
    finally{await mongoose.connection.close()}

   }
   store();

});


app.get('*', (req, res) => {
  res.status(403).json(`not found`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
