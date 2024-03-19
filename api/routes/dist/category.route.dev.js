"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _CategoryController = require("../controllers/Category.Controller.js");

var _verifyAuthorizationMiddleware = require("../middleware/verifyAuthorization.middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/test', _CategoryController.test);
router.post('/create', _verifyAuthorizationMiddleware.verifyAuthorization, _CategoryController.createARecord);
router.get('/read_all', _verifyAuthorizationMiddleware.verifyAuthorization, _CategoryController.readAllRecord);
router.get('/read/:id', _verifyAuthorizationMiddleware.verifyAuthorization, _CategoryController.readRecordById);
router.put('/update/:id', _verifyAuthorizationMiddleware.verifyAuthorization, _CategoryController.updateRecord);
router["delete"]('/delete/:id', _verifyAuthorizationMiddleware.verifyAuthorization, _CategoryController.deleteRecord);
var _default = router;
exports["default"] = _default;