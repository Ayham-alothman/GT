import {UniversityToReg,AdminsToReg} from '../interfase/allInterface';
import {UniversityModel} from './schema/university.schema';
import {AdminsModel} from './schema/admin.schema'
import mongoose,{connect}  from 'mongoose'
import bcrypt from 'bcrypt'


async function SignupForUniversity (data:UniversityToReg) {
 try{
    await connect('mongodb://localhost:27017/GT_User');
    const University=new UniversityModel(data);
    await University.save()
    
 }
 catch(e){console.log(e)}
 finally{await mongoose.connection.close()}    
}

async function SignupForAdmins (data:AdminsToReg) {
    try{
      await connect('mongodb://localhost:27017/GT_User');
      const hash=bcrypt.hashSync(data.password,10);
      let newdata={
         username:data.username,
         password:hash,
         forUniversity:new mongoose.Types.ObjectId(data.forUniversity)
      }
      const newAdmin=new AdminsModel(newdata);
      await newAdmin.save();
    }
    catch(e){console.log(e)}
    finally{await mongoose.connection.close()}
}

async function SignupForcoordination () {
    
}

async function SignupForStudent () {
    
}

async function SignupForCeo () {
    
}

export {SignupForUniversity,SignupForAdmins,SignupForcoordination,SignupForStudent,SignupForCeo}
