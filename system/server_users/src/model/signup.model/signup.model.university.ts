import mongoose,{connect}  from 'mongoose';
import {UniversityModel} from '../schema/university.schema';

import {UniversityToReg} from '../../interfase/allInterface';




async function SignupForUniversity (data:UniversityToReg) {
    try{
       await connect('mongodb://localhost:27017/GT_User');
       const PreviousUniversity=await UniversityModel.findOne({username:data.username});
       if(PreviousUniversity?.username==data.username){throw `this name found before`}
       const University=await new UniversityModel(data).save();
       return University._id;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}    
   }

   export {SignupForUniversity}