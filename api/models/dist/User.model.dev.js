"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addressSchema = new _mongoose["default"].Schema({
  userId: {
    type: String
  },
  streetAddress: {
    type: String
  },
  city: {
    type: Number
  },
  state: {
    type: Number
  },
  zip_code: {
    type: Number
  },
  mobile: {
    type: Number
  }
});
var userSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  },
  mobile: {
    type: String
  },
  address: [addressSchema],
  payment_information: [],
  review: [],
  rating: [],
  isAdmin: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});

var User = _mongoose["default"].model('User', userSchema);

var _default = User;
exports["default"] = _default;