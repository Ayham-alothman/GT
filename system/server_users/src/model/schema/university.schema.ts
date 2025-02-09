import mongoose, {Schema,model} from 'mongoose';

interface university {
 _id:mongoose.Types.ObjectId
 username:string,
 numberofsession:number,
 startReg:Date,
}

// Create a schema
const UserSchema: Schema<university> = new Schema({
    username: { type: String, required: true ,unique:true },
    numberofsession: { type: Number, required: false,default:0 },
    startReg: { type: Date, default: Date.now }
    
  });
  const UniversityModel= model<university>('universities',UserSchema);
  export {UniversityModel}
  