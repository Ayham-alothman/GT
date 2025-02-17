import { DepartmentModel } from "../schema/Department.Schema";
import mongoose,{connect} from 'mongoose';


async function GetAllDepartModel(idUni:string){ console.log(idUni)
    
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        const Depart=await DepartmentModel.find({university_id:idUni});
        return Depart;
        
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}


export {GetAllDepartModel}

