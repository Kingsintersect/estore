import mongoose, { SchemaType } from "mongoose";


const sizeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,
    },
}, { timestamps: true });

const Size = mongoose.model('Size', sizeSchema);

export default Size;