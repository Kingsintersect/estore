import mongoose, { SchemaType } from "mongoose";


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    parentCategory: {
        type: String,
    },
    level: {
        type: Number,
    },
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

export default Category;