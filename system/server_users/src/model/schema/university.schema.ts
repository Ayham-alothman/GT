import mongoose, {Schema,model} from 'mongoose';

interface university {
 _id:mongoose.Types.ObjectId
 username:string,
 colleges:[string],
 numberofsession:number,
 startReg:Date,
 admins:[mongoose.Types.ObjectId]
}

// Create a schema
const UserSchema: Schema<university> = new Schema({
    username: { type: String, required: true ,unique:true },
    colleges: { type:[String], required: true },
    numberofsession: { type: Number, required: false,default:0 },
    admins:{type:[mongoose.Types.ObjectId],required:false,default:[]},
    startReg: { type: Date, default: Date.now }
    
  });
  const UniversityModel= model<university>('university',UserSchema);
  export {UniversityModel}
  