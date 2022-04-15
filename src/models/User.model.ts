import mongoose, { Document, Schema } from 'mongoose';

export interface User {
    id: String; // echoed from path parameter
    group: String; //                   // echoed from path parameter
    createdAt: Date; // first registered heartbeat
    updatedAt: Date; // last registered heartbeat
    meta: {
        // meta echoed from request body
        foo: Number;
    };
}

export interface UserModel extends User, Document {}
