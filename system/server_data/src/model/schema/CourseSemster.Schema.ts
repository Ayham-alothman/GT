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
  
  
}

const CourseSemesterSchema = new Schema<CourseSemester>({
  course_id: { type: Schema.Types.ObjectId, ref: 'Courses', required: true },
  semester_id: { type: Schema.Types.ObjectId, ref: 'Semesters', required: true },
  teachers: { type: [Schema.Types.ObjectId], ref: 'Teachers', required: true },
  classroom: { type: Schema.Types.ObjectId, ref: 'Classrooms', required: true },
  hours: { type: Number, required: true },
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  even: { type: Boolean, required: false },
  multi: { type: Boolean, required: false },
  allSameDay: { type: Boolean, required: false },
  
});

const CourseSemesterModel = model<CourseSemester>('CourseSemester', CourseSemesterSchema);

export  {CourseSemesterModel}