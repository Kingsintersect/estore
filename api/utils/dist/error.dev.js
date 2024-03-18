"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapErrors = exports.errorHandler = void 0;

var errorHandler = function errorHandler(statusCode, message) {
  var error = new Error(); // error.statusCode = String(statusCode);

  error.name = String(statusCode);
  error.message = message;
  return error;
};

exports.errorHandler = errorHandler;

var mapErrors = function mapErrors(errors) {
  return errors.reduce(function (prev, err) {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  }, {});
};

exports.mapErrors = mapErrors;