import mongoose from "mongoose";

export const paymentInformationModel = {
    cardHolderName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    cvv: {
        type: String,
        required: true,
    }
};

const paymentInformationSchema = new mongoose.Schema({ ...paymentInformationModel }, { timestamps: true });

const PaymentInformation = mongoose.model('PaymentInformation', paymentInformationSchema);

export default PaymentInformation;