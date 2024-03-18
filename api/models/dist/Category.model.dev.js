"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Parent = void 0;

var _mongodb = require("mongodb");

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Parent = {
  title: String,
  lavel: Number,
  parentCategory: String
};
exports.Parent = Parent;
var categorySchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  level: {
    type: Number
  },
  parentCategory: {
    type: String,
    "default": "NULL"
  } // parentCategory: {
  //     type: Map,
  //     of: String,
  //     default: ""
  // },
  // parentCategory: {
  //     type: Parent
  // },

}, {
  timestamps: true
});

var Category = _mongoose["default"].model('Category', categorySchema);

var _default = Category;
exports["default"] = _default;