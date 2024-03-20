"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _SizeController = require("../controllers/Size.Controller.js");

var _verifyAuthorizationMiddleware = require("../middleware/verifyAuthorization.middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _SizeController.getSize);
router.get('/:id', _SizeController.getSizeById);
router.post('/create', _verifyAuthorizationMiddleware.verifyAuthorization, _SizeController.createSize);
router.put('/update/:id', _verifyAuthorizationMiddleware.verifyAuthorization, _SizeController.updateSizeById);
router["delete"]('/delete/:id', _verifyAuthorizationMiddleware.verifyAuthorization, _SizeController.deleteSizeById);
var _default = router;
exports["default"] = _default;