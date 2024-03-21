"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongodb = require("mongodb");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrderItemModel = {
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
var orderItemSchema = new _mongoose["default"].Schema(_objectSpread({}, OrderItemModel), {
  timestamps: true
});

var OrderItem = _mongoose["default"].model('orderItem', orderItemSchema);

var _default = OrderItem;
exports["default"] = _default;