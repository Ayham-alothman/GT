import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {StudentModel} from '../schema/student.schema';
import {UniversityModel} from '../schema/university.schema'
import {StudentsToReg} from '../../interfase/allInterface';

async function SignupForStudent (data:StudentsToReg) {

    try{
        await connect('mongodb://localhost:27017/GT_User');
        const University=await UniversityModel.findById(data.forUniversity);
        if(!University){throw `the university do't fiund`}
        else if(!University.colleges.includes(data.forCollega)){throw `this college do't found`}
        else {
            const DataToReg={
                username:data.username,
                password:bcrypt.hashSync(data.password,10),
                forCollega:data.forCollega,
                forUniversity:new mongoose.Types.ObjectId(data.forUniversity),
                levelofyear:data.levelofyear
            }
            const Student=new StudentModel(DataToReg);
            await Student.save();
            return Student._id;
        }

    }
    catch(e){console.log(e)}
    finally{await mongoose.connection.close()}
    
}

export {SignupForStudent}