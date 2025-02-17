import mongoose,{connect} from 'mongoose';
import { AdminsModel } from '../schema/admin.schema';




async function SignupSubAdminModel(infoadmin:any){

    try{
        await connect('mongodb://localhost:27017/GT_User');
        await new AdminsModel(infoadmin).save();
        return;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}
}

export {SignupSubAdminModel}