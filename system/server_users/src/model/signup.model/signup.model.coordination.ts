import mongoose,{connect} from 'mongoose';
import bcrypt from 'bcrypt';

import {} from '../../interfase/allInterface'

async function SignupForcoordination () {
    try{
        await connect('mongodb://localhost:27017/GT_User');
    }
    catch(e){console.log(e)}
    finally{await mongoose.connection.close()}
}

export {SignupForcoordination}