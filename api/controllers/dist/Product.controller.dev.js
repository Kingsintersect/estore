"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = exports.deleteProductById = exports.updateproductById = exports.readById = exports.readAll = exports.createProduct = void 0;

var _error = require("../utils/error.js");

var _ProductModel = _interopRequireDefault(require("../models/Product.model.js"));

var _utilities = require("../utils/utilities.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createProduct = function createProduct(req, res, next) {
  var reqProductFields, newProduct;
  return regeneratorRuntime.async(function createProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          reqProductFields = _objectSpread({}, req.body);
          reqProductFields.title = (0, _utilities.toCamelCase)(reqProductFields.title);
          newProduct = new _ProductModel["default"](reqProductFields);
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(newProduct.save());

        case 6:
          res.status(200).json({
            newProduct: newProduct,
            message: "Product Record created successfully!"
          });
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          // next(error)
          res.status(500).json(_context.t0.message);

        case 12:
          return _context.abrupt("return");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
};

exports.createProduct = createProduct;

var readAll = function readAll(req, res, next) {
  var allProduct;
  return regeneratorRuntime.async(function readAll$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_ProductModel["default"].find({}));

        case 3:
          allProduct = _context2.sent;

          if (allProduct) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", next((0, _error.errorHandler)(404, "Empty Product Record!")));

        case 6:
          res.status(200).json(allProduct);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0.message);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.readAll = readAll;

var readById = function readById(req, res, next) {
  var SingleProduct;
  return regeneratorRuntime.async(function readById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_ProductModel["default"].findById(req.params.id));

        case 3:
          SingleProduct = _context3.sent;

          if (SingleProduct) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", next((0, _error.errorHandler)(404, "Could not find this category record!")));

        case 6:
          res.status(200).json(SingleProduct);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0.message);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.readById = readById;

var updateproductById = function updateproductById(req, res, next) {
  var updatedRecord;
  return regeneratorRuntime.async(function updateproductById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_ProductModel["default"].findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 3:
          updatedRecord = _context4.sent;
          res.status(201).json({
            message: "Record updated successfully...",
            updatedRecord: updatedRecord
          });
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0.message);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateproductById = updateproductById;

var deleteProductById = function deleteProductById(req, res, next) {
  return regeneratorRuntime.async(function deleteProductById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_ProductModel["default"].findByIdAndDelete(req.params.id));

        case 3:
          res.status(201).json({
            message: "Record deleted successfully!"
          });
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json(_context5.t0.message);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.deleteProductById = deleteProductById;

var test = function test(req, res) {
  res.json({
    message: "Api welcome product route",
    body: _objectSpread({}, req.body)
  });
};

exports.test = test;