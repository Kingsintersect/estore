import mongoose from "mongoose";
import { AddressModel } from "./Address.model.js";

// const addressSchema = new mongoose.Schema({
//     userId: {
//         type: String,
//     },
//     streetAddress: {
//         type: String,
//     },
//     city: {
//         type: Number,
//     },
//     state: {
//         type: Number,
//     },
//     zip_code: {
//         type: Number,
//     },
//     mobile: {
//         type: Number,
//     },
// })

export const UserModel = {
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
        lowercase: true,
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
    address: [AddressModel],
    payment_information: [],
    review: [],
    rating: [],
    isAdmin: {
        type: Boolean,
        default: false,
    }
}

const userSchema = new mongoose.Schema({ ...UserModel }, { timestamps: true });


const User = mongoose.model('users', userSchema);

export default User;