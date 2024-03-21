import mongoose, { SchemaType } from "mongoose";

export const ReviewModel = {
    review: {
        type: String,
    },
    productId: {
        type: String,
    },
    userId: {
        type: String,
    },
}

const reviewSchema = new mongoose.Schema({ ...ReviewModel }, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;