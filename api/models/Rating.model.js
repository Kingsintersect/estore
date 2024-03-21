import mongoose, { SchemaType } from "mongoose";

export const RatingModel = {
    userId: {
        type: String,
        require: true,
    },
    productId: {
        type: String,
        required: true,
    },
    rating: {
        type: mongoose.Schema.Types.Decimal128,
    },
}

const ratingSchema = new mongoose.Schema({ ...RatingModel }, { timestamps: true });

const Rating = mongoose.model('ratings', ratingSchema);

export default Rating;