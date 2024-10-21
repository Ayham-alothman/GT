import mongoose from 'mongoose';

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
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    forUniversity: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
    forCollega:{type: String,require:true},
    levelofyear:{type:Number}
});

export {StudentsSchema}