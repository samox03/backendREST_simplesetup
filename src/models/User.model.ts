import mongoose, { Document, Schema } from 'mongoose';

// Create an interface representing a document in MongoDB.
export interface IUser {
    idUser: String; // echoed from path parameter
    group: String; //                   // echoed from path parameter
    createdAt: Date; // first registered heartbeat
    updatedAt: Date; // last registered heartbeat
    meta: {
        // meta echoed from request body
        foo: Number;
    };
}

export interface IUserModel extends IUser, Document {}

// Create a Schema corresponding to the document interface.
const UserSchema: Schema = new Schema({
    idUser: { type: String, required: true },
    group: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: Date,
    meta: {
        // meta echoed from request body
        foo: Number
    }
});

// Create a Model.
export default mongoose.model<IUserModel>('User', UserSchema);

///// Connect to MongoDB..:)
