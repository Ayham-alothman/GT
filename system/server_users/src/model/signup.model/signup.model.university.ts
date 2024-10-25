import mongoose,{connect}  from 'mongoose';
import {UniversityModel} from '../schema/university.schema';

import {UniversityToReg} from '../../interfase/allInterface';




async function SignupForUniversity (data:UniversityToReg) {
    try{
       await connect('mongodb://localhost:27017/GT_User');
       const University=new UniversityModel(data);
       await University.save()
       
    }
    catch(e){console.log(e)}
    finally{await mongoose.connection.close()}    
   }

   export {SignupForUniversity}