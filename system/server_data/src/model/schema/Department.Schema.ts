import { Schema, model,Types } from 'mongoose';

interface Department  {
  id: number;
  usernameA: string;
  usernameE: string;
  university_id: Types.ObjectId;
}

const DepartmentSchema = new Schema<Department>({
  usernameA: { type: String, required: true },
  usernameE: { type: String, required: true },
  university_id: { type: Schema.Types.ObjectId,  required: true }
});

const DepartmentModel = model<Department>('Departments', DepartmentSchema);

export {DepartmentModel};
