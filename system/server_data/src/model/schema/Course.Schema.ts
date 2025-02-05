import { Schema, model, Types } from 'mongoose';

interface Course  {
  id: number;
  department_id: Types.ObjectId;
  teachers: Types.ObjectId[];
  classroom: Types.ObjectId;
  nameA: string;
  nameE: string;
  code: string;
  type: string;
  year: number;
  semester: number;
  ICEF: string;
  major: string;
  shortcut: string;
  hours: number;
  hoursT: number;
  hoursP: number;
  prerequisiteByCode: string[];
  prerequisite: number[];
  hoursPrerequisite: number;
  descriptionA: string;
  descriptionE: string;
}

const CourseSchema = new Schema<Course>({
  department_id: { type: Schema.Types.ObjectId, ref: 'Departments', required: true },
  teachers: [{ type: Schema.Types.ObjectId, ref: 'Teachers', required: true }],
  classroom: { type: Schema.Types.ObjectId, ref: 'Classrooms', required: true },
  nameA: { type: String, required: false },
  nameE: { type: String, required: true },
  code: { type: String, required: true },
  type: { type: String, required: false },
  year: { type: Number, required: true },
  semester: { type: Number, required: true },
  ICEF: { type: String, required: false },
  major: { type: String, required: false },
  shortcut: { type: String, required: false },
  hours: { type: Number, required: true },
  hoursT: { type: Number, required: false },
  hoursP: { type: Number, required: false },
  prerequisiteByCode: [{ type: String, required: true }],
  prerequisite: [{ type: Number, required: false }],
  hoursPrerequisite: { type: Number, required: false },
  descriptionA: { type: String, required: false },
  descriptionE: { type: String, required: false},
});

const CourseModel = model<Course>('Courses', CourseSchema);

export  {CourseModel};
