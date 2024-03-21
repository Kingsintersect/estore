import mongoose from "mongoose";

export const AddressModel = {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String
    },
    city: {
        type: Number,
    },
    state: {
        type: Number,
    },
    zip_code: {
        type: Number,
    },
    mobile: {
        type: Number,
    },
}

const addressSchema = new mongoose.Schema({ ...AddressModel }, { timestamps: true });

const Address = mongoose.model('address', addressSchema);

export default Address;