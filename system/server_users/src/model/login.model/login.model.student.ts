import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {StudentModel} from '../schema/student.schema'

async function LoginForStudent(id:string,password:string){

    try{
        await connect('mongodb://localhost:27017/GT_User');
        const Student=await StudentModel.findById(id);
        if(!Student){throw {state:400,message:`this user not found`}};
        const StudentValdtion=bcrypt.compareSync(password,Student.password);
        if(!StudentValdtion){throw {state:400,message:`the password incorect`}}
        delete(Student as {password?:string}).password;
        return Student;
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}
}

export {LoginForStudent}