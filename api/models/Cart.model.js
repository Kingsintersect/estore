import { Double } from "mongodb";
import mongoose from "mongoose";

export const cartTypes = {
    user_id: { // reference user collection
        type: String,
        required: true,
    },
    cartItems: { // references CartItem Collection
        type: Map,
        required: true,
    },
    totalPrice: {
        type: Double,
        required: true,
    },
    totalItem: {
        type: Number,
    },
    totalDiscountedPrice: {
        type: Number,
    },
    discount: {
        type: Number,
    },
}

const cartSchema = new mongoose.Schema({ ...cartTypes }, { timestamps: true });

const Cart = mongoose.model('cart', cartSchema);

export default Cart;