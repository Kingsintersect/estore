"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserModel = _interopRequireDefault(require("../models/User.model.js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _error = require("../utils/error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _callee = function _callee(req, res, next) {
  var cookie, decoded_token, email, validUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Access a specific header
          cookie = req.cookies.access_token;

          if (cookie) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", next((0, _error.errorHandler)(401, "Unauthenticated Cookie!")));

        case 4:
          decoded_token = _jsonwebtoken["default"].verify(cookie, process.env.JWT_SECRET);
          email = decoded_token["email"];
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

          return _context.abrupt("return", next((0, _error.errorHandler)(404, "Unauthenticated Cookie user!!")));

        case 11:
          res.locals.user = validUser;
          return _context.abrupt("return", next());

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(401).json({
            error: "Unauthenticated!!!"
          }));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

exports["default"] = _callee;