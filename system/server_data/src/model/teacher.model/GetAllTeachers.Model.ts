import mongoose,{connect} from 'mongoose';
import { TeacherModel } from '../schema/Teachers.Schema';


async function GetAllTeacherModel(idDepart:string,idUni:string){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        const DocAllTeachers=await TeacherModel.find({department_id:idDepart,university_id:idUni});
        return DocAllTeachers;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}


export {GetAllTeacherModel}