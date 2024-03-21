"use strict";

var _mongodb = require("mongodb");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OrderType = {
  order_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  orderItems: {
    type: Map,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  },
  shippingAddress: {
    type: CUSTOM_ADDRESS,
    required: true
  },
  paymentDetails: {
    type: NEW__PAYMENT_DETAILS,
    required: true
  },
  totalPrice: {
    type: _mongodb.Double,
    required: true
  },
  totalDiscountedPrice: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  orderStatus: {
    type: String,
    required: true
  },
  totalItem: {
    type: Number,
    required: true
  }
};