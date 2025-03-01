import mongoose,{connect} from 'mongoose';
import { SemesterModel } from '../schema/Semster.Schema';


async function GenerateNewSemster(idUni:string){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        const {_id}=await new SemesterModel({idUni:idUni}).save();
        return _id;
        
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}


export {GenerateNewSemster}