import mongoose,{model} from 'mongoose';

interface admins {
 _id:mongoose.Types.ObjectId
 username:string,
 password:string,
 preinfo:boolean
 forUniversity:mongoose.Types.ObjectId
} 

// Create a schema
const adminSchema = new mongoose.Schema<admins>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    preinfo:{type:Boolean,required:false,default:false},
    forUniversity: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true }
});

 const AdminsModel=model<admins>('admins',adminSchema)

export {AdminsModel}