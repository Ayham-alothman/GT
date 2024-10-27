import mongoose,{model} from 'mongoose';

interface Students {
 _id:mongoose.Types.ObjectId
 username:string,
 password:string,
 forUniversity:mongoose.Types.ObjectId,
 forCollega:string,
 levelofyear: number
} 

// Create a schema
const StudentsSchema = new mongoose.Schema<Students>({
    username: { type: String, required: true, },
    password: { type: String, required: true, },
    forUniversity: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
    forCollega:{type: String,required:true},
    levelofyear:{type:Number, required:true}
});

const StudentModel=model<Students>('students',StudentsSchema);

export {StudentModel}