import mongoose, {Schema,model} from 'mongoose';

interface university {
 _id:mongoose.Types.ObjectId
 username:string,
<<<<<<< HEAD
 departments:[string],
 numberofsession:number,
 startReg:Date,
 admins:[{id:mongoose.Types.ObjectId,department:[string]}]
=======
 numberofsession:number,
 startReg:Date,
>>>>>>> dashboard
}

// Create a schema
const UserSchema: Schema<university> = new Schema({
<<<<<<< HEAD
    username: { type: String, required: true  },
    departments: { type:[String], required: false,default:[] },
    numberofsession: { type: Number, required: false,default:0 },
    admins:{type:[{id:mongoose.Types.ObjectId,department:[String]}],required:false,default:[]},
=======
    username: { type: String, required: true ,unique:true },
    numberofsession: { type: Number, required: false,default:0 },
>>>>>>> dashboard
    startReg: { type: Date, default: Date.now }
    
  });
  const UniversityModel= model<university>('universities',UserSchema);
  export {UniversityModel}
  