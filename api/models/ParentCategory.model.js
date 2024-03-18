import mongoose, { SchemaType } from "mongoose";


const parentCategorySchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    productId: {
        type: String,
        required: true,
    },
    parentCategory: {
        type: mongoose.Schema.Types.Decimal128,
    },
}, { timestamps: true });

const ParentCategory = mongoose.model('ParentCategory', parentCategorySchema);

export default ParentCategory;