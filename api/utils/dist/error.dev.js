"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleErrors = exports.mapErrors = exports.errorHandler = void 0;

var _console = require("console");

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

var handleErrors = function handleErrors(err) {
  (0, _console.log)(err.message, err.code);
  var errors = {
    email: "",
    password: ""
  }; // if duplicate error code

  if (err.cod === 11000) {
    errors.email = "This Email Already Exists!";
    return errors;
  } // validate errors


  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(function (_ref) {
      var properties = _ref.properties;
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

exports.handleErrors = handleErrors;