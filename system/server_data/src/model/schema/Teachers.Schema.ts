import { Schema, model,  Types } from 'mongoose';

interface Teacher  {
  id: number;
  usernameA: string;
  usernameE: string;
  department_id: Types.ObjectId;
}

const TeacherSchema = new Schema<Teacher>({
  usernameA: { type: String, required: false },
  usernameE: { type: String, required: true },
  department_id: { type: Schema.Types.ObjectId, ref: 'Departments', required: true }
});

const TeacherModel = model<Teacher>('Teachers', TeacherSchema);

export  {TeacherModel};
