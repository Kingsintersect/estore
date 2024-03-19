"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/user.controller.js");

var _authMiddleware = _interopRequireDefault(require("../middleware/auth.middleware.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/test', _userController.test);
router.get('/profile', _authMiddleware["default"], _userController.profile);
var _default = router;
exports["default"] = _default;