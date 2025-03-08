import mongoose ,{connect} from 'mongoose'
import {UniversityModel} from '../schema/university.schema'

async function AddUniversity(username:string){ console.log(`set`)
    try{
        await connect('mongodb://localhost:27017/GT_User');
        const Doc=new UniversityModel({username:username});
        const DataDoc=await Doc.save();
        return DataDoc
        
        
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}
} 

export {AddUniversity}