import mongoose, { Document, Schema } from 'mongoose';

export interface iAuthor {
    name: string;
}

export interface iAuthorModel extends iAuthor, Document {}

const AuthorSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<iAuthorModel>('Author', AuthorSchema);
