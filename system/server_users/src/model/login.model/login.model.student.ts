import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {StudentModel} from '../schema/student.schema'

async function LoginForStudent(id:string,password:string){

    try{
        await connect('mongodb://localhost:27017/GT_User');
        const Student=await StudentModel.findById(id);
        if(!Student){throw `this user not found`};
        const StudentValdtion=bcrypt.compareSync(password,Student.password);
        if(!StudentValdtion){throw `the password incorect`}
        return Student;
    }
    catch(e){console.log(e)}
    finally{await mongoose.connection.close()}
}

export {LoginForStudent}