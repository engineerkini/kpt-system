import { Schema, model, Document } from 'mongoose';

interface ITeacher extends Document {
  firstName: string;
  lastName: string;
  subject: string;
  hireDate: Date;
}

const TeacherSchema = new Schema<ITeacher>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  subject: { type: String, required: true },
  hireDate: { type: Date, required: true },
});

export default model<ITeacher>('Teacher', TeacherSchema);