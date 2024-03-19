"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.me = exports.signin = exports.signup = void 0;

var _UserModel = _interopRequireDefault(require("../models/User.model.js"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _cookie = _interopRequireDefault(require("cookie"));

var _error = require("../utils/error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signup = function signup(req, res, next) {
  var _req$body, firstName, lastName, email, password, isAdmin, hashedPassword, newUser, savedUser, token;

  return regeneratorRuntime.async(function signup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password, isAdmin = _req$body.isAdmin;
          hashedPassword = _bcrypt["default"].hashSync(password, 10);
          newUser = new _UserModel["default"]({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            isAdmin: isAdmin
          });
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(newUser.save());

        case 6:
          savedUser = _context.sent;
          token = setToken(email, isAdmin, res);
          res.status(200).json({
            user: savedUser,
            access_token: token,
            message: "User creaed successfully!"
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](3);
          next(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 11]]);
};

exports.signup = signup;

var signin = function signin(req, res, next) {
  var _req$body2, email, password, errors, validUser, validPassword, token;

  return regeneratorRuntime.async(function signin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          errors = {};
          if (email.length == 0) errors.email = "Email field must not be empty!";
          if (password.length == 0) errors.password = "Password field must not be empty!";

          if (!(Object.keys(errors).length > 0)) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", next((0, _error.errorHandler)(400, errors)));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(_UserModel["default"].findOne({
            email: email
          }));

        case 9:
          validUser = _context2.sent;

          if (validUser) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", next((0, _error.errorHandler)(404, "User not found here!")));

        case 12:
          validPassword = _bcrypt["default"].compareSync(password, validUser.password);

          if (validPassword) {
            _context2.next = 15;
            break;
          }

          return _context2.abrupt("return", next((0, _error.errorHandler)(401, "Wrong Credentials!")));

        case 15:
          token = setToken(email, validUser.isAdmin, res);
          return _context2.abrupt("return", res.status(200).json({
            access_token: token
          }));

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](1);
          next(_context2.t0);

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 19]]);
};

exports.signin = signin;

var setToken = function setToken(email, isAdmin, res) {
  var access_token = _jsonwebtoken["default"].sign({
    email: email,
    isAdmin: isAdmin
  }, process.env.JWT_SECRET);

  res.set('Set-Cookie', _cookie["default"].serialize('access_token', access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600,
    path: '/'
  }));
  return access_token;
};

var me = function me(req, res, next) {
  return regeneratorRuntime.async(function me$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.json(res.locals.user));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.me = me;

var logout = function logout(req, res) {
  res.set('Set-Cookie', _cookie["default"].serialize('access_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/'
  }));
  return res.status(200).json({
    success: true
  });
};

exports.logout = logout;