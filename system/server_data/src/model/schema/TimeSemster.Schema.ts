import { Schema, model,  Types } from 'mongoose';

interface TimeSlots {
  semester_id: Types.ObjectId;
  time: any;
}

const TimeSemesterSchema = new Schema<TimeSlots>({
  semester_id: { type: Schema.Types.ObjectId, ref: 'Semesters', required: true },
  time: { type:{}, required: true }
});

const TimeSemesterModel = model<TimeSlots>('TimeSemesters', TimeSemesterSchema);

export  {TimeSemesterModel};
