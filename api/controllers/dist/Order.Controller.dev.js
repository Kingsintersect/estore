"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteOrders = exports.getAllOrders = exports.cancledOrder = exports.deliveredOrder = exports.shippedOrder = exports.confirmedOrder = exports.placeOrder = exports.userOrderHistory = exports.findOrderById = exports.createOrder = void 0;

var createOrder = function createOrder(user, shippingAddress) {};

exports.createOrder = createOrder;

var findOrderById = function findOrderById(orderId) {};

exports.findOrderById = findOrderById;

var userOrderHistory = function userOrderHistory(userId) {};

exports.userOrderHistory = userOrderHistory;

var placeOrder = function placeOrder(orderId) {};

exports.placeOrder = placeOrder;

var confirmedOrder = function confirmedOrder(orderId) {};

exports.confirmedOrder = confirmedOrder;

var shippedOrder = function shippedOrder(orderId) {};

exports.shippedOrder = shippedOrder;

var deliveredOrder = function deliveredOrder(orderId) {};

exports.deliveredOrder = deliveredOrder;

var cancledOrder = function cancledOrder(orderId) {};

exports.cancledOrder = cancledOrder;

var getAllOrders = function getAllOrders() {};

exports.getAllOrders = getAllOrders;

var deleteOrders = function deleteOrders(orderId) {};

exports.deleteOrders = deleteOrders;