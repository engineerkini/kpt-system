import { Schema, model, Document } from 'mongoose';

interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  available: boolean;
}

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  available: { type: Boolean, default: true },
});

export default model<IBook>('Book', BookSchema);