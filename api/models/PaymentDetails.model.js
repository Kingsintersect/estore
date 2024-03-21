import { Double } from "mongodb";
import mongoose from "mongoose";

export const paymentDetailsModel = {
    PaymentMethod: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    paymentId: {
        type: String,
        required: true,
    },
    stripPaymentLinkId: {
        type: String,
        required: true,
    },
    stripPaymentLinkReferenceId: {
        type: String,
        required: true,
    },
    stripPaymentLinkStatus: {
        type: String,
        required: true,
    },
    stripPaymentId: {
        type: String,
        required: true,
    },
}

const paymentDetailsSchema = new mongoose.Schema({ ...paymentDetailsModel }, { timestamps: true });

const paymentDetails = mongoose.model('paymentDetail', paymentDetailsSchema);

export default paymentDetails;