import { CourseModel } from "../schema/Course.Schema"
import mongoose,{connect} from 'mongoose';


async function GetCourseforUni(idUni:string){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        const Docs=await CourseModel.find({university_id:idUni}).populate(`department_id`).populate(`classroom`);
        return Docs;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}

export {GetCourseforUni}