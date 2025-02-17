import mongoose,{connect} from 'mongoose';
import { ClassroomModel } from '../schema/ClassRoom.Schema';


async function GetAllClassModel(idUni:string){console.log(idUni)
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        const DataClass=await ClassroomModel.find({university_id:idUni})
        return DataClass;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}


export {GetAllClassModel}