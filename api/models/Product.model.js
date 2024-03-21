import mongoose, { SchemaType } from "mongoose";
import { SizeModel } from "./Size.model.js";

export const ProductModel = {
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
        type: [SizeModel],
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
}

const productSchema = new mongoose.Schema({ ...ProductModel }, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;