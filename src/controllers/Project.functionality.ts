import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User.model';

const registerApplication = (req: Request, res: Response, next: NextFunction) => {
    const { idUser } = req.body;
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        idUser
    });
    return user
        .save()
        .then((user: User) => {
            res.status(200).json({ user });
        })
        .catch((error) => res.status(500).json({ error }));
};

//TODO: figure out how to update the date
//here it throughs an error..
const updateDate = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    return User.findById(userId)
        .then((user) => {
            if (user) {
                user.updatedAt.set(req.body.updatedAt);
                return user
                    .save()
                    .then((user) => res.status(201).json({ userId: user.id }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteApplication = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return User.findByIdAndDelete(userId)
        .then((user) => (user ? res.status(200).json({ user }) : res.status(404).json({ message: 'User not found' })))
        .catch((error) => res.status(500).json({ error }));
};

//for now shows all users not all groups
const showGroups = (req: Request, res: Response, next: NextFunction) => {
    return User.find()
        .then((users) => res.status(200).json({ users }))
        .catch((error) => res.status(500).json({ error }));
};
