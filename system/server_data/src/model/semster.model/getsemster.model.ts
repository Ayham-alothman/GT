import mongoose,{connect} from 'mongoose';
import { SemesterModel } from '../schema/Semster.Schema';


async function GetSemstersModel(idUni:string) {

    try{
        await connect('mongodb://localhost:27017/GT_Data');
        const AllSemster=await SemesterModel.find({idUni:idUni});
        console.log(AllSemster);

    }
    catch(e){throw e}
    
}

export {GetSemstersModel}