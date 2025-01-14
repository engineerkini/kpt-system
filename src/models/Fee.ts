import { Schema, model, Document } from 'mongoose';

interface IFee extends Document {
  name: string;
  amount: number;
  dueDate: Date;
}

const FeeSchema = new Schema<IFee>({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
});

export default model<IFee>('Fee', FeeSchema);