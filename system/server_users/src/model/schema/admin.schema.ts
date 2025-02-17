import mongoose,{model,Types} from 'mongoose';

interface admins {
 username:string,
 password:string,
 forUniversity:Types.ObjectId,
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
      type: [{_id:String,username:String,write:Boolean}],
      default: []
    },
    preinfo: {
      type: Boolean,
      default: false
    }
  });
 const AdminsModel=model<admins>('admins',adminSchema)

export {AdminsModel}