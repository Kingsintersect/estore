"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ProductController = require("../controllers/Product.controller.js");

var _verifyAuthorizationMiddleware = require("../middleware/verifyAuthorization.middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/test', _ProductController.test);
router.get('/', _ProductController.readAll);
router.get('/:id', _ProductController.readById);
router.post('/create', _verifyAuthorizationMiddleware.verifyAuthorization, _ProductController.createProduct);
router.put('/update/:id', _verifyAuthorizationMiddleware.verifyAuthorization, _ProductController.updateproductById);
router["delete"]('/delete/:id', _verifyAuthorizationMiddleware.verifyAuthorization, _ProductController.deleteProductById);
var _default = router;
exports["default"] = _default;