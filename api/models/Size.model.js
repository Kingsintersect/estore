import mongoose, { SchemaType } from "mongoose";


const sizeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    // quantity: {
    //     type: Number,
    //     required: true,
    // },
}, { timestamps: true });

const Size = mongoose.model('sizes', sizeSchema);

export default Size;