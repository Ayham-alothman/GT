import { Schema, model,Types } from 'mongoose';

interface Semester  {
  idUni: Types.ObjectId;
  date: Date;
}
const SemesterSchema = new Schema<Semester>({
  idUni: { type: Schema.Types.ObjectId, required: true },
  date: { type: Date, default: Date.now }
});


const SemesterModel = model<Semester>('Semesters', SemesterSchema);

export  {SemesterModel};
