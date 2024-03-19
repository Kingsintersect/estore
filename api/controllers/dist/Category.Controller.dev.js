"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCamelCase = exports.test = exports.deleteRecord = exports.updateRecord = exports.readRecordById = exports.readAllRecord = exports.createARecord = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _error = require("../utils/error.js");

var _CategoryModel = _interopRequireDefault(require("../models/Category.model.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createARecord = function createARecord(req, res, next) {
  var categoryItems, newCategory, errors, key, uniqueCategory;
  return regeneratorRuntime.async(function createARecord$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Access a specific header
          categoryItems = _objectSpread({}, req.body);
          if (categoryItems.level == 1) categoryItems.parentCategory = "NULL";
          categoryItems.title = toCamelCase(categoryItems.title); // CREATE NEW A CATEGORY +++++  ADMIN AUTHORIZATION ONLY

          newCategory = new _CategoryModel["default"](categoryItems);
          _context.prev = 4;
          errors = {};

          for (key in categoryItems) {
            if (categoryItems[key].length == 0) errors[key] = "".concat(key, " must not have a value");
          }

          if (!(Object.keys(errors).length > 0)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", next((0, _error.errorHandler)(400, errors)));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(_CategoryModel["default"].findOne({
            title: categoryItems.title
          }));

        case 11:
          uniqueCategory = _context.sent;

          if (!uniqueCategory) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", next((0, _error.errorHandler)(404, "Title Of this Category Already Exists!")));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(newCategory.save());

        case 16:
          res.status(200).json({
            message: "Category Record created successfully!"
          });
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](4);
          // next(error)
          res.status(500).json(_context.t0.message);

        case 22:
          return _context.abrupt("return");

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 19]]);
};

exports.createARecord = createARecord;

var readAllRecord = function readAllRecord(req, res, next) {
  var allCategory;
  return regeneratorRuntime.async(function readAllRecord$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_CategoryModel["default"].find({}));

        case 3:
          allCategory = _context2.sent;

          if (allCategory) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", next((0, _error.errorHandler)(404, "Empty Category Record!")));

        case 6:
          res.status(200).json(allCategory);
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

exports.readAllRecord = readAllRecord;

var readRecordById = function readRecordById(req, res, next) {
  var SingleCategory;
  return regeneratorRuntime.async(function readRecordById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_CategoryModel["default"].findById(req.params.id));

        case 3:
          SingleCategory = _context3.sent;

          if (SingleCategory) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", next((0, _error.errorHandler)(404, "Could not find this category record!")));

        case 6:
          res.status(200).json(SingleCategory);
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

exports.readRecordById = readRecordById;

var updateRecord = function updateRecord(req, res, next) {
  var updatedRecord;
  return regeneratorRuntime.async(function updateRecord$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_CategoryModel["default"].findByIdAndUpdate(req.params.id, {
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

exports.updateRecord = updateRecord;

var deleteRecord = function deleteRecord(req, res, next) {
  return regeneratorRuntime.async(function deleteRecord$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_CategoryModel["default"].findByIdAndDelete(req.params.id));

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

exports.deleteRecord = deleteRecord;

var test = function test(req, res) {
  res.json({
    message: "Api welcome category route",
    body: _objectSpread({}, req.body)
  });
};

exports.test = test;

var toCamelCase = function toCamelCase(letter) {
  var str = letter.toLowerCase(); // str.charAt(0).toUpperCase() + str.slice(1);

  return str[0].toUpperCase() + str.slice(1);
};

exports.toCamelCase = toCamelCase;