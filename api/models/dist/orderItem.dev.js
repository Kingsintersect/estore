"use strict";

var _mongodb = require("mongodb");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OrderItemType = {
  order_id: {
    type: String,
    required: true
  },
  product_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  qauntity: {
    type: Number
  },
  price: {
    type: Number
  },
  discountedPrice: {
    type: Number
  },
  deliveryDate: {
    type: Date
  }
};