import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
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

const userSchema = new mongoose.Schema({
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
    address: [addressSchema],
    payment_information: [],
    review: [],
    rating: [],
    isAdmin: {
        type: Boolean,
        default: false,
    }

}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;