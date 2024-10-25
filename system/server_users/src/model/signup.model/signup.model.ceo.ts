import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {CeoModel} from '../schema/ceo.schema';


async function SignupToCeo(name:string,password:string){
    try{
        await connect('mongodb://localhost:27017/GT_User');
        const newCeo={
            name:name,
            password:bcrypt.hashSync(password,10)
        }
        const Ceo=new CeoModel(newCeo);
        await Ceo.save();


    }
    catch(e){console.log(e)}
    finally{await mongoose.connection.close()}
} 
SignupToCeo('ayham','12345');

export {SignupToCeo}