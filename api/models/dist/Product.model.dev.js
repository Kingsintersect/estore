"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _Category = _interopRequireDefault(require("./Category.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var productSchema = new _mongoose["default"].Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  discountedPrice: {
    type: Number
  },
  discountedPercent: {
    type: Number
  },
  quantity: {
    type: Number
  },
  brand: {
    type: String
  },
  color: {
    type: String
  },
  sizes: {
    type: [String]
  },
  imageUrl: {
    type: String
  },
  rating: {
    type: []
  },
  review: {
    type: []
  },
  numRating: {
    type: Number
  },
  category: {
    type: _Category["default"]
  }
}, {
  timestamps: true
});

var Product = _mongoose["default"].model('Product', productSchema);

var _default = Product;
exports["default"] = _default;