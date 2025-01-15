import mongoose,{model} from 'mongoose';

interface classRoom{
    count:number,
    type:string,
    capacity:number,
    forUniversity:mongoose.Types.ObjectId
}

const classroomSchema=new mongoose.Schema<classRoom>({
    count:{type:Number,required:true},
    type:{type:String,required:true,unique:false},
    capacity:{type:Number,required:true},
    forUniversity:{type:mongoose.Schema.Types.ObjectId,required:true}
})

const classroomModel=model<classRoom>('classroom',classroomSchema);

export {classroomModel}