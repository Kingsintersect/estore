import mongoose, { SchemaType } from "mongoose";

export const SizeModel = {
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
}

const sizeSchema = new mongoose.Schema({ ...SizeModel }, { timestamps: true });

const Size = mongoose.model('sizes', sizeSchema);

export default Size;