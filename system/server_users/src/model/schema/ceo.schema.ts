import mongoose from 'mongoose';

interface ceo {
 _id:mongoose.Types.ObjectId,
 password:string,
 
} 

// Create a schema
const ceoSchema = new mongoose.Schema<ceo>({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    password: { type: String, required: true },
    
});

export {ceoSchema}