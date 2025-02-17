import { Schema, model, Types } from 'mongoose';

interface Classroom  {
  count: number;
  type: string;
  capacity: number;
  university_id: Types.ObjectId;
}

const ClassroomSchema = new Schema<Classroom>({
  count: { type: Number, required: true },
  type: { type: String, required: true },
  capacity: { type: Number, required: false },
  university_id: { type: Schema.Types.ObjectId, required: true }
});

const ClassroomModel = model<Classroom>('Classrooms', ClassroomSchema);

export  {ClassroomModel};
