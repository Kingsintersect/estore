"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UserModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _AddressModel = require("./Address.model.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const addressSchema = new mongoose.Schema({
//     userId: {
//         type: String,
//     },
//     streetAddress: {
//         type: String,
//     },
//     city: {
//         type: Number,
//     },
//     state: {
//         type: Number,
//     },
//     zip_code: {
//         type: Number,
//     },
//     mobile: {
//         type: Number,
//     },
// })
var UserModel = {
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
  address: [_AddressModel.AddressModel],
  payment_information: [],
  review: [],
  rating: [],
  isAdmin: {
    type: Boolean,
    "default": false
  }
};
exports.UserModel = UserModel;
var userSchema = new _mongoose["default"].Schema(_objectSpread({}, UserModel), {
  timestamps: true
});

var User = _mongoose["default"].model('users', userSchema);

var _default = User;
exports["default"] = _default;