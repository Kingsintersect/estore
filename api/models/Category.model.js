import { Long } from "mongodb";
import mongoose, { SchemaType } from "mongoose";

export const Parent = {
    title: String,
    lavel: Number,
    parentCategory: String,
}
export const CategoryModel = {
    title: {
        type: String,
        max: 50,
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
}
const categorySchema = new mongoose.Schema({ ...CategoryModel }, { timestamps: true });

const Category = mongoose.model('categories', categorySchema);

export default Category;