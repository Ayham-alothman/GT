import mongoose,{connect} from 'mongoose';
import { AdminsModel } from '../schema/admin.schema';


async function ChangePreInfoModel(idAdmin:string,){
    try{
        await connect('mongodb://localhost:27017/GT_User');
        const Doc=await AdminsModel.findByIdAndUpdate(idAdmin,{
            $set:{preinfo:true}
        })
        if(Doc!=null){return;}
        throw `there problem n request`            
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}
}

export {ChangePreInfoModel}