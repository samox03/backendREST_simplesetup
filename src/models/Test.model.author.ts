import mongoose, { Document, Schema } from 'mongoose';

// Create an interface representing a document in MongoDB.
export interface iAuthor {
    name: string;
}

export interface iAuthorModel extends iAuthor, Document {}

// Create a Schema corresponding to the document interface.
const AuthorSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

// Create a Model
export default mongoose.model<iAuthorModel>('Author', AuthorSchema);
