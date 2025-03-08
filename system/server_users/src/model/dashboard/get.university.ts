import mongoose ,{connect} from 'mongoose'
import {UniversityModel} from '../schema/university.schema'

async function getAllUniversitys(){
    try{
        await connect('mongodb://localhost:27017/GT_User');
        const DataUni=await UniversityModel.find({});
        return DataUni;

    }
    catch(e){throw e}
    //finally{await mongoose.connection.close()}
} 


export {getAllUniversitys}