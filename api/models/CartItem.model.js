import { Double } from "mongodb";
import mongoose from "mongoose";

export const cartItemTypes = {
    cart_id: { // reference cart collection
        type: String,
        required: true,
    },
    product_id: { // references procuct Collection
        type: String,
        required: true,
    },
    user_id: { // references user Collection
        type: String,
        required: true,
    },
    size: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Double,
    },
    discountedPrice: {
        type: Number,
    },
}

const cartItemSchema = new mongoose.Schema({ ...cartItemTypes }, { timestamps: true });

const CartItem = mongoose.model('cartItem', cartItemSchema);

export default CartItem;