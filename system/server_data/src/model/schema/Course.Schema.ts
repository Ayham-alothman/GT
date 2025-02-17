import { Schema, model, Types } from 'mongoose';

interface Course  {
  department_id: Types.ObjectId;
  university_id:Types.ObjectId;
  classroom: Types.ObjectId;
  nameA: string;
  nameE: string;
  code: string;
  year: number;
  semester: number;
  hours: string;
  hoursT: string;
  hoursP: string;
  prerequisiteByCode: string;
  prerequisite: string;
  hoursPrerequisite: string;
  description: string;
}

const CourseSchema = new Schema<Course>({
  department_id: { type: Schema.Types.ObjectId, ref: 'Departments', required: true },
  university_id: { type: Schema.Types.ObjectId,  required: true },
  classroom: { type: Schema.Types.ObjectId, ref: 'Classrooms', required: true },
  nameA: { type: String, required: false },
  nameE: { type: String, required: true },
  code: { type: String, required: true },
  year: { type: Number, required: true },
  semester: { type: Number, required: true },
  hours: { type: String, required: true },
  hoursT: { type: String, required: false },
  hoursP: { type: String, required: false },
  prerequisiteByCode: { type: String, required: true },
  prerequisite: { type: String, required: false },
  hoursPrerequisite: { type: String, required: false },
  description: { type: String, required: false},
});

const CourseModel = model<Course>('Courses', CourseSchema);

export  {CourseModel};
