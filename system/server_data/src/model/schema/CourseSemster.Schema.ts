import { Schema, model,  Types } from 'mongoose';

interface CourseSemester  {
  course_id: Types.ObjectId;
  semester_id: Types.ObjectId;
  teachers: Types.ObjectId[];
  classroom: Types.ObjectId;
  hours: number;
  min: number;
  max: number;
  even: boolean;
  multi: boolean;
  allSameDay: boolean;
  lapConflict: boolean;
  conflict: Types.ObjectId[];
}

const CourseSemesterSchema = new Schema<CourseSemester>({
  course_id: { type: Schema.Types.ObjectId, ref: 'Courses', required: true },
  semester_id: { type: Schema.Types.ObjectId, ref: 'Semesters', required: true },
  teachers: [{ type: Schema.Types.ObjectId, ref: 'Teachers', required: true }],
  classroom: { type: Schema.Types.ObjectId, ref: 'Classrooms', required: true },
  hours: { type: Number, required: true },
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  even: { type: Boolean, required: true },
  multi: { type: Boolean, required: true },
  allSameDay: { type: Boolean, required: true },
  lapConflict: { type: Boolean, required: true },
  conflict: [{ type: Schema.Types.ObjectId, ref: 'Courses', required: true }]
});

const CourseSemesterModel = model<CourseSemester>('CourseSemester', CourseSemesterSchema);

export  {CourseSemesterModel}