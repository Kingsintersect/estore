import { Double } from "mongodb";
import mongoose from "mongoose";

export const OrderModel = {
    order_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    orderItems: {
        type: Map,
        required: true,
    },
    orderDate: {
        type: Date,
        required: true,
    },
    deliveryDate: {
        type: Date,
        required: true,
    },
    shippingAddress: {
        type: CUSTOM_ADDRESS,
        required: true,
    },
    paymentDetails: {
        type: NEW__PAYMENT_DETAILS,
        required: true,
    },
    totalPrice: {
        type: Double,
        required: true,
    },
    totalDiscountedPrice: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
    },
    totalItem: {
        type: Number,
        required: true,
    },
}

const orderSchema = new mongoose.Schema({ ...OrderModel }, { timestamps: true });

const Order = mongoose.model('order', orderSchema);

export default Order;