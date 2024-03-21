import { Double } from "mongodb";
import mongoose from "mongoose";

const OrderItemModel = {
    order_id: {
        type: String,
        required: true,
    },
    product_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    qauntity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    discountedPrice: {
        type: Number,
    },
    deliveryDate: {
        type: Date,
    }
}

const orderItemSchema = new mongoose.Schema({ ...OrderItemModel }, { timestamps: true });

const OrderItem = mongoose.model('orderItem', orderItemSchema);

export default OrderItem;