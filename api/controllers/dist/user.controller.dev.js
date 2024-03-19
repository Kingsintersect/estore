"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUserByEmail = exports.findUserByJwt = exports.findUserById = exports.profile = exports.test = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _UserModel = _interopRequireDefault(require("../models/User.model.js"));

var _error = require("../utils/error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var test = function test(req, res) {
  res.json({
    message: "Api welcome to this route"
  });
};

exports.test = test;

var profile = function profile(req, res, next) {
  var token, decoded_token, email, validUser, _validUser$_doc, pass, userInfo;

  return regeneratorRuntime.async(function profile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Access a specific header
          token = req.get('Authorization').split(' ')[1];

          if (token) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", next((0, _error.errorHandler)(401, "Unauthenticated Token!")));

        case 3:
          decoded_token = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
          email = decoded_token["email"];
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(_UserModel["default"].findOne({
            email: email
          }));

        case 8:
          validUser = _context.sent;

          if (validUser) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", next((0, _error.errorHandler)(404, "Unauthenticated User!")));

        case 11:
          _validUser$_doc = validUser['_doc'], pass = _validUser$_doc.password, userInfo = _objectWithoutProperties(_validUser$_doc, ["password"]); // res.status(200).json({message: "profile worked", cookie: decoded_token, email });

          res.status(200).json(userInfo);
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](5);
          res.status(500).json(_context.t0.message);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 15]]);
};

exports.profile = profile;

var findUserById = function findUserById(req, res, next) {};

exports.findUserById = findUserById;

var findUserByJwt = function findUserByJwt(req, res, next) {};

exports.findUserByJwt = findUserByJwt;

var findUserByEmail = function findUserByEmail(req, res, next) {};

exports.findUserByEmail = findUserByEmail;