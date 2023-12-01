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
        type: [String],
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

    categoryId: {
        type: String
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;