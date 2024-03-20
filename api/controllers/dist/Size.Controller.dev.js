"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSizeById = exports.updateSizeById = exports.getSizeById = exports.getSize = exports.createSize = void 0;

var _error = require("../utils/error.js");

var _SizeModel = _interopRequireDefault(require("../models/Size.model.js"));

var _utilities = require("../utils/utilities.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createSize = function createSize(req, res, next) {
  var reqSizeFields, newSize, uniqueSize;
  return regeneratorRuntime.async(function createSize$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          reqSizeFields = _objectSpread({}, req.body);
          reqSizeFields.name = (0, _utilities.toCamelCase)(reqSizeFields.name);
          newSize = new _SizeModel["default"](reqSizeFields);
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(_SizeModel["default"].findOne({
            name: reqSizeFields.name
          }));

        case 6:
          uniqueSize = _context.sent;

          if (!uniqueSize) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", next((0, _error.errorHandler)(404, "This Size Entity Already Exists!")));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(newSize.save());

        case 11:
          res.status(200).json({
            newSize: newSize,
            message: "Size Record created successfully!"
          });
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          // next(error)
          res.status(500).json(_context.t0.message);

        case 17:
          return _context.abrupt("return");

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 14]]);
};

exports.createSize = createSize;

var getSize = function getSize(req, res, next) {
  var allSize;
  return regeneratorRuntime.async(function getSize$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_SizeModel["default"].find({}));

        case 3:
          allSize = _context2.sent;

          if (allSize) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", next((0, _error.errorHandler)(404, "Empty Size Record!")));

        case 6:
          res.status(200).json(allSize);
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

exports.getSize = getSize;

var getSizeById = function getSizeById(req, res, next) {
  var SingleSize;
  return regeneratorRuntime.async(function getSizeById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_SizeModel["default"].findById(req.params.id));

        case 3:
          SingleSize = _context3.sent;

          if (SingleSize) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", next((0, _error.errorHandler)(404, "Could not find this size record!")));

        case 6:
          res.status(200).json(SingleSize);
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

exports.getSizeById = getSizeById;

var updateSizeById = function updateSizeById(req, res, next) {
  var updatedRecord;
  return regeneratorRuntime.async(function updateSizeById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_SizeModel["default"].findByIdAndUpdate(req.params.id, {
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

exports.updateSizeById = updateSizeById;

var deleteSizeById = function deleteSizeById(req, res, next) {
  return regeneratorRuntime.async(function deleteSizeById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_SizeModel["default"].findByIdAndDelete(req.params.id));

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

exports.deleteSizeById = deleteSizeById;