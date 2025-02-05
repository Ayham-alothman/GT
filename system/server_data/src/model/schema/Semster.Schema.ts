import { Schema, model } from 'mongoose';

interface Semester  {
  name: string;
  date: Date;
}

const SemesterSchema = new Schema<Semester>({
  name: { type: String, required: true },
  date: { type: Date, required: true }
});

const SemesterModel = model<Semester>('Semesters', SemesterSchema);

export  {SemesterModel};
