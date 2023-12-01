import mongoose, { SchemaType } from "mongoose";


const ratingSchema = new mongoose.Schema({
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
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;