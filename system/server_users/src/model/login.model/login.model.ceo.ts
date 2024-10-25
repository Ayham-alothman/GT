import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {CeoModel} from '../schema/ceo.schema';

async function LoginForCeo(id:string,password:string){
    try{
        await connect('mongodb://localhost:27017/GT_User');
        const Ceo=await CeoModel.findById(id);
        if(!Ceo){throw {state:400,message:`this id not found `}};
        const hash=Ceo.password;
        const TruePassword=bcrypt.compareSync(password,hash);
        if(!TruePassword){throw {state:400,message:`the password incorect `}}
        return 
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}
}

export {LoginForCeo}