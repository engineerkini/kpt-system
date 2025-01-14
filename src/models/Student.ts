import { Schema, model, Document } from 'mongoose';

interface IStudent extends Document {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  grade: string;
}

const StudentSchema = new Schema<IStudent>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  grade: { type: String, required: true },
});

export default model<IStudent>('Student', StudentSchema);