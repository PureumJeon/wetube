"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _usercontroller = require("../controllers/usercontroller");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router(); // userRouter.get(routes.users, users);


userRouter.get(_routes["default"].editProfile, _middlewares.onlyPrivate, _usercontroller.getEditProfile);
userRouter.post(_routes["default"].editProfile, _middlewares.onlyPrivate, _middlewares.uploadAvatar, _usercontroller.postEditProfile);
userRouter.get(_routes["default"].changePassword, _middlewares.onlyPrivate, _usercontroller.getChangePassword);
userRouter.post(_routes["default"].changePassword, _middlewares.onlyPrivate, _usercontroller.postChangePassword);
userRouter.get(_routes["default"].userDetail(), _usercontroller.userDetail);
var _default = userRouter;
exports["default"] = _default;