import { Schema, model, Document, Types } from 'mongoose';

interface ISemesterDepartment extends Document {
  department_id: Types.ObjectId[];
  semester_id: Types.ObjectId;
}

const SemesterDepartmentSchema = new Schema<ISemesterDepartment>({
  department_id: { type: [Schema.Types.ObjectId], ref: 'Departments', required: true },
  semester_id: { type: Schema.Types.ObjectId, ref: 'Semesters', required: true }
});


const SemesterDepartmentModel = model<ISemesterDepartment>('SemesterDepartment', SemesterDepartmentSchema);

export  {SemesterDepartmentModel};
