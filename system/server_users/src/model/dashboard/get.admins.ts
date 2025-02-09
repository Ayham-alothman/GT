import mongoose ,{connect} from 'mongoose'
import { AdminsModel } from '../schema/admin.schema';
async function getAllAdminss(){
    try{
        await connect('mongodb://localhost:27017/GT_User');
        const DataAdmins=await AdminsModel.find({}).populate(`forUniversity`);
        return DataAdmins;
       
    }
    catch(e){throw e}
    finally{}
} 


export {getAllAdminss}