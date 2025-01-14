import { Schema, model, Document } from 'mongoose';

interface IUserRole extends Document {
  role: string;
  permissions: string[];
}

const UserRoleSchema = new Schema<IUserRole>({
  role: { type: String, required: true },
  permissions: { type: [String], required: true },
});

export default model<IUserRole>('UserRole', UserRoleSchema);