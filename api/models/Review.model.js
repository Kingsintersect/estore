import mongoose, { SchemaType } from "mongoose";


const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
    },
    productId: {
        type: String,
    },
    userId: {
        type: String,
    },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;