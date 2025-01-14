import { Schema, model, Document } from 'mongoose';

interface IGrade extends Document {
  studentId: Schema.Types.ObjectId;
  subject: string;
  score: number;
  date: Date;
}

const GradeSchema = new Schema<IGrade>({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  subject: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, required: true },
});

export default model<IGrade>('Grade', GradeSchema);