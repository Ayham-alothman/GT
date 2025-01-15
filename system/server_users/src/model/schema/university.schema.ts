import mongoose, {Schema,model} from 'mongoose';

interface university {
 _id:mongoose.Types.ObjectId
 username:string,
 departments:[string],
 numberofsession:number,
 startReg:Date,
 admins:[{id:mongoose.Types.ObjectId,department:[string]}]
}

// Create a schema
const UserSchema: Schema<university> = new Schema({
    username: { type: String, required: true  },
    departments: { type:[String], required: false,default:[] },
    numberofsession: { type: Number, required: false,default:0 },
    admins:{type:[{id:mongoose.Types.ObjectId,department:[String]}],required:false,default:[]},
    startReg: { type: Date, default: Date.now }
    
  });
  const UniversityModel= model<university>('university',UserSchema);
  export {UniversityModel}
  