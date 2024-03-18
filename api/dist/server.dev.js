"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _userRoute = _interopRequireDefault(require("./routes/user.route.js"));

var _authRoute = _interopRequireDefault(require("./routes/auth.route.js"));

var _categoryRoute = _interopRequireDefault(require("./routes/category.route.js"));

var _trimMiddleware = require("./middleware/trim.middleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT;
app.use(_express["default"].json());
app.use((0, _cors["default"])({
  credentials: true,
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200
}));
app.use(_trimMiddleware.trim);
app.use((0, _cookieParser["default"])());
app.get('/', function (req, res) {
  res.send('Hello World!');
}); // CONNECTION TO MONGODB DATABASE REMOTELY

app.listen(port, function () {
  _mongoose["default"].connect(process.env.MONGO).then(function () {
    console.log("Connected to MongoDB");
  })["catch"](function (err) {
    console.log(err);
  });

  return console.log("Express is listening at http://localhost:".concat(port));
});
app.use('/api/user', _userRoute["default"]);
app.use('/api/auth', _authRoute["default"]);
app.use('/api/me', _authRoute["default"]);
app.use('/api/category', _categoryRoute["default"]);
app.use(function (err, req, res, next) {
  var statusCode = err.statusCode || 500;
  var message = err.message || "Internal Server Error!";
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message
  });
});