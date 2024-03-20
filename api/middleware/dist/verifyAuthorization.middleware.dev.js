"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyAuthorization = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _error = require("../utils/error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var verifyAuthorization = function verifyAuthorization(req, res, next) {
  // const token = req.headers.access_token;
  var token = req.get('Authorization').split(" ")[1];
  if (!token) return res.status(401).json("Access-Denied!");

  try {
    var verified = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);

    if (!verified.isAdmin) return res.status(401).json("Access-Denied! You do not have Admin Privilages");
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json("Unauthorized user !");
  }
};

exports.verifyAuthorization = verifyAuthorization;