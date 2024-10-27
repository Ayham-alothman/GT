import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {CoordinationToReg} from '../../interfase/allInterface';
import {CoordinationModel} from '../schema/coordination.schema';
import {UniversityModel} from '../schema/university.schema'


async function SignupForcoordination (data:CoordinationToReg) {
    try{
        await connect('mongodb://localhost:27017/GT_User');
        const University=await UniversityModel.findById(data.forUniversity);
        if(!University){throw `this universty do't found`}
        if(University?.colleges.includes(data.forCollega)){
            const newCoor={
                username:data.username,
                password:bcrypt.hashSync(data.password,10),
                forUniversity:new mongoose.Types.ObjectId(data.forUniversity),
                forCollega:data.forCollega,
                
            }
            const newCoord= new CoordinationModel(newCoor);
            await newCoord.save();
            return newCoord._id;
        }
        
        else if(!University?.colleges.includes(data.forCollega)){
            throw `this college do't found in this university`
        }
        
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}
}
 
export {SignupForcoordination}
