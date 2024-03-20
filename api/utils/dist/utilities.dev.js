"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCamelCase = void 0;

var toCamelCase = function toCamelCase(letter) {
  var str = letter.toLowerCase(); // str.charAt(0).toUpperCase() + str.slice(1);

  return str[0].toUpperCase() + str.slice(1);
};

exports.toCamelCase = toCamelCase;