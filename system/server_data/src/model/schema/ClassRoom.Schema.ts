import { Schema, model, Types } from 'mongoose';

interface Classroom  {
  id: number;
  code: string;
  type: string;
  capacity: number;
  university_id: Types.ObjectId;
}

const ClassroomSchema = new Schema<Classroom>({
  code: { type: String, required: true },
  type: { type: String, required: true },
  capacity: { type: Number, required: false },
  university_id: { type: Schema.Types.ObjectId, required: true }
});

const ClassroomModel = model<Classroom>('Classrooms', ClassroomSchema);

export  {ClassroomModel};
