"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OrderModel = void 0;

var _mongodb = require("mongodb");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrderModel = {
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
exports.OrderModel = OrderModel;
var orderSchema = new _mongoose["default"].Schema(_objectSpread({}, OrderModel), {
  timestamps: true
});

var Order = _mongoose["default"].model('order', orderSchema);

var _default = Order;
exports["default"] = _default;