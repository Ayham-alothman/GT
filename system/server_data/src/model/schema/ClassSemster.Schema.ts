import { Schema, model, Document, Types } from 'mongoose';

interface ClassroomSemester extends Document {
  classroom_id: Types.ObjectId;
  semester_id: Types.ObjectId;
  class: { [key: string]: number };
}

const ClassroomSemesterSchema = new Schema<ClassroomSemester>({
  classroom_id: { type: Schema.Types.ObjectId, ref: 'Classrooms', required: true },
  semester_id: { type: Schema.Types.ObjectId, ref: 'Semesters', required: true },
  class: { type: Map, required: true }
});

const ClassroomSemesterModel = model<ClassroomSemester>('ClassroomSemesters', ClassroomSemesterSchema);

export default ClassroomSemesterModel;
