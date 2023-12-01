import mongoose from "mongoose";
import IUser from "../interfaces/user.interface";
import { Address } from "../interfaces/user.interface";;


const addressSchema = new mongoose.Schema<Address>({
    userId: {
        type: String,
    },
    streetAddress: {
        type: String,
    },
    city: {
        type: Number,
    },
    state: {
        type: Number,
    },
    zip_code: {
        type: Number,
    },
    mobile: {
        type: Number,
    },
})

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
    role: {
        type: String,
    },
    mobile: {
        type: String,
    },
    address: [addressSchema],
    payment_information: [],
    review: [],
    rating: [],

}, { timestamps: true });


const User = mongoose.model<IUser>('User', userSchema);

export default User;