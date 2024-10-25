import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {CoordinationModel} from '../schema/coordination.schema';

async function LoginForCoordition(id:string,password:string){

    try{
        await connect('mongodb://localhost:27017/GT_User');
        const Coordination=await CoordinationModel.findById(id);
        if(!Coordination){throw `this user not found`};
        const AdminValdtion=bcrypt.compareSync(password,Coordination.password);
        if(!AdminValdtion){throw `the password incorect`}
        return Coordination;
    }
    catch(e){console.log(e)}
    finally{await mongoose.connection.close()}
}

export {LoginForCoordition}