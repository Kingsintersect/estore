import mongoose from "mongoose";
import IUser from "../interfaces/user.interface";



const userSchema = new mongoose.Schema<IUser>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true});

const User = mongoose.model<IUser>('User', userSchema);

export default User; 