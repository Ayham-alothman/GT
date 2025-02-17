import mongoose,{connect} from 'mongoose';
import { ClassroomModel } from '../schema/ClassRoom.Schema';

interface Class{
    type:string,
    count:number,
    capacity:number
}

async function AddGroupClassModel(nameDepart:Class,idUni:string){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        await new ClassroomModel({...nameDepart,university_id:idUni}).save();
        return;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}


export {AddGroupClassModel}