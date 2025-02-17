import { DepartmentModel } from "../schema/Department.Schema";
import mongoose,{connect} from 'mongoose';


async function AddGroupDepartModel(nameDepart:string,idUni:string){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        await new DepartmentModel({username:nameDepart,university_id:idUni}).save();
        return;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}


export {AddGroupDepartModel}