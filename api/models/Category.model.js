import { Long } from "mongodb";
import mongoose, { SchemaType } from "mongoose";

export const Parent = {
    title: String,
    lavel: Number,
    parentCategory: String,
}
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    level: {
        type: Number,
    },
    parentCategory: {
        type: String,
        default: "NULL",
    },
    // parentCategory: {
    //     type: Map,
    //     of: String,
    //     default: ""
    // },
    // parentCategory: {
    //     type: Parent
    // },
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

export default Category;