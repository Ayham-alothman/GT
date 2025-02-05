import { Schema, model, Document, Types } from 'mongoose';

interface TimeSlots {
  [key: number]: number[];
}

interface TimeSemester extends Document {
  id: number;
  semester_id: Types.ObjectId;
  time: TimeSlots;
}

const TimeSlotsSchema = new Schema<TimeSlots>({
  1: { type: [Number], required: false },
  2: { type: [Number], required: false },
  3: { type: [Number], required: false },
  4: { type: [Number], required: false },
  5: { type: [Number], required: false },
  6: { type: [Number], required: false },
  7: { type: [Number], required: false }
}, { _id: false });

const TimeSemesterSchema = new Schema<TimeSemester>({
  semester_id: { type: Schema.Types.ObjectId, ref: 'Semesters', required: true },
  time: { type: TimeSlotsSchema, required: true }
});

const TimeSemesterModel = model<TimeSemester>('TimeSemesters', TimeSemesterSchema);

export default TimeSemesterModel;
