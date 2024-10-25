import mongoose,{model} from 'mongoose';

interface Ceo {
 _id:mongoose.Types.ObjectId,
 name:string,
 password:string,
 
} 

// Create a schema
const ceoSchema = new mongoose.Schema<Ceo>({
    name:{type:String,required:true},
    password: { type: String, required: true },
    
});

const CeoModel=model<Ceo>('ceo',ceoSchema);

export {CeoModel}