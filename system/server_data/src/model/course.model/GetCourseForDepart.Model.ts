import { CourseModel } from "../schema/Course.Schema"
import mongoose,{connect} from 'mongoose';


async function GetCourseforUniAndDepart(idUni:string,idDepart:string){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        const Docs=await CourseModel.find({university_id:idUni,department_id:idDepart}).populate(`department_id`);
        return Docs;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}

export {GetCourseforUniAndDepart}