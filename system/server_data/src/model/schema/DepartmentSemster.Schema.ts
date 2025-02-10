import { Schema, model, Document, Types } from 'mongoose';

interface SemesterDepartment  {
  department_id: Types.ObjectId;
  semester_id: Types.ObjectId;
}

const SemesterDepartmentSchema = new Schema<SemesterDepartment>({
  department_id: { type: Schema.Types.ObjectId, ref: 'Departments', required: true },
  semester_id: { type: Schema.Types.ObjectId, ref: 'Semesters', required: true }
});

const SemesterDepartmentModel = model<SemesterDepartment>('SemesterDepartments', SemesterDepartmentSchema);

export default SemesterDepartmentModel;
