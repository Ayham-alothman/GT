import mongoose,{model} from 'mongoose';

interface coordination {
 _id:mongoose.Types.ObjectId
 username:string,
 password:string,
 forUniversity:mongoose.Types.ObjectId,
 forCollega:string
} 

// Create a schema
const coordinationSchema = new mongoose.Schema<coordination>({
    username: { type: String, required: true, },
    password: { type: String, required: true },
    forUniversity: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
    forCollega:{type: String,require:true}
});

const CoordinationModel=model<coordination>('coorditions',coordinationSchema)

export {CoordinationModel}