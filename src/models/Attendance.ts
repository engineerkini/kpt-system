import { Schema, model, Document } from 'mongoose';

interface IAttendance extends Document {
  studentId: Schema.Types.ObjectId;
  date: Date;
  status: 'Present' | 'Absent' | 'Late';
}

const AttendanceSchema = new Schema<IAttendance>({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true },
});

export default model<IAttendance>('Attendance', AttendanceSchema);