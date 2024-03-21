"use strict";

var _mongodb = require("mongodb");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var paymentDetailsType = {
  PaymentMethod: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  paymentId: {
    type: String,
    required: true
  },
  stripPaymentLinkId: {
    type: String,
    required: true
  },
  stripPaymentLinkReferenceId: {
    type: String,
    required: true
  },
  stripPaymentLinkStatus: {
    type: String,
    required: true
  },
  stripPaymentId: {
    type: String,
    required: true
  }
};