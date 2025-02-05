import { Schema, model, Document, Types } from 'mongoose';

interface Table extends Document {
  file: Buffer;
  semester_id: Types.ObjectId;
}

const TableSchema = new Schema<Table>({
  file: { type: Buffer, required: true },
  semester_id: { type: Schema.Types.ObjectId, ref: 'Semesters', required: true }
});

const TableModel = model<Table>('Tables', TableSchema);

export  {TableModel};
    