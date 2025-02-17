import { Schema, model,Types } from 'mongoose';

interface Department  {
  username: string;
  university_id: Types.ObjectId;
}

const DepartmentSchema = new Schema<Department>({
  username: { type: String, required: true },
  university_id: { type: Schema.Types.ObjectId,  required: true }
});

const DepartmentModel = model<Department>('Departments', DepartmentSchema);

export {DepartmentModel};
