import mongoose from "mongoose";


const paymentInformationSchema = new mongoose.Schema({
    cardHolderName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: String,
        required: true,
    },
    cvv: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const PaymentInformation = mongoose.model('PaymentInformation', paymentInformationSchema);

export default PaymentInformation;