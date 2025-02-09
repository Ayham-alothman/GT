import mongoose,{model} from 'mongoose';

interface admins {
 username:string,
 password:string,
<<<<<<< HEAD
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

=======
 forUniversity:mongoose.Types.ObjectId,
 permision:number,
 depart:[],
 preinfo:boolean,
} 

const adminSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    forUniversity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'universities',
      required: true
    },
    permision: {
      type: Number,
      required: true
    },
    depart: {
      type: [{name:String,write:Boolean}],
      default: []
    },
    preinfo: {
      type: Boolean,
      default: false
    }
  });
>>>>>>> dashboard
 const AdminsModel=model<admins>('admins',adminSchema)

export {AdminsModel}