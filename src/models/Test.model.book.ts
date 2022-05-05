import mongoose, { Document, Schema } from 'mongoose';

export interface iBook {
    title: string;
    author: string;
}

export interface iBookModel extends iBook, Document {}

const BookSchema = new Schema(
    {
        title: { type: 'string', required: true },
        author: { type: Schema.Types.ObjectId, required: true, ref: 'Author' }
    },
    {
        timestamps: true,
        versionKey: true
    }
);

export default mongoose.model<iBookModel>('Book', BookSchema);
