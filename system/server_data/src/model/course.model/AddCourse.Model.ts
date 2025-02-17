import { CourseModel } from "../schema/Course.Schema"
import mongoose,{connect} from 'mongoose';


async function AddCourseModel(dataCours:any){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        await new CourseModel(dataCours).save();
        return;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}

export {AddCourseModel}