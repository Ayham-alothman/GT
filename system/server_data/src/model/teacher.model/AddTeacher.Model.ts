import mongoose,{connect} from 'mongoose';
import { TeacherModel } from '../schema/Teachers.Schema';


async function AddNewTeacherModel(nameteacher:string,idDepart:string,idUni:string){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        await new TeacherModel({username:nameteacher,department_id:idDepart,university_id:idUni}).save();
        return;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}


export {AddNewTeacherModel}