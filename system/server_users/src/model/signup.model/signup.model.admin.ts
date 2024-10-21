import mongoose,{connect}  from 'mongoose';
import bcrypt from 'bcrypt';
import {AdminsToReg} from '../../interfase/allInterface'
import {AdminsModel} from '../schema/admin.schema'

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