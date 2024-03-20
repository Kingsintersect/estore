import mongoose, { SchemaType } from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    discountedPrice: {
        type: Number,
    },
    discountedPercent: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    brand: {
        type: String,
    },
    color: {
        type: String,
    },
    sizes: {
        type: [{}],
    },
    imageUrl: {
        type: String,
    },
    rating: {
        type: [],
    },
    review: {
        type: [],
    },
    numRating: {
        type: Number,
    },
    topLavelCategory: {
        type: String
    },
    secondLavelCategory: {
        type: String
    },
    thirdLavelCategory: {
        type: String
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;