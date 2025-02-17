import { Schema, model,  Types } from 'mongoose';

interface Teacher  {
  id: number;
  username: string;
  department_id: Types.ObjectId;
  university_id: Types.ObjectId;
}

const TeacherSchema = new Schema<Teacher>({
  username: { type: String, required: false },
  department_id: { type: Schema.Types.ObjectId, ref: 'Departments', required: true },
  university_id:{ type: Schema.Types.ObjectId,  required: true }
});

const TeacherModel = model<Teacher>('Teachers', TeacherSchema);

export  {TeacherModel};
