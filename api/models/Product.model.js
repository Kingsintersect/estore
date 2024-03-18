import mongoose, { SchemaType } from "mongoose";
import Category from "./Category.model";


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

    category: {
        type: Category,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;