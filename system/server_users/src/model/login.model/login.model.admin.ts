import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {AdminsModel} from '../schema/admin.schema';

async function LoginForAdmin(id:string,password:string){

    try{
        await connect('mongodb://localhost:27017/GT_User');
        const Admin=await AdminsModel.findById(id);
        if(!Admin){throw {state:400,message:`this user not found`}};
        const AdminValdtion=bcrypt.compareSync(password,Admin.password);
        if(!AdminValdtion){throw {state:400,message:`the password incorect`}}
        delete (Admin as { password?: string }).password; // Now this is valid

        return Admin;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}
}

export {LoginForAdmin}