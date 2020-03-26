"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _routes = _interopRequireDefault(require("../routes.js"));

var _videocontroller = require("../controllers/videocontroller.js");

var _usercontroller = require("../controllers/usercontroller.js");

var _middlewares = require("../middlewares.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get(_routes["default"].join, _middlewares.onlyPublic, _usercontroller.getJoin);
globalRouter.post(_routes["default"].join, _middlewares.onlyPublic, _usercontroller.postJoin, _usercontroller.postLogin);
globalRouter.get(_routes["default"].login, _middlewares.onlyPublic, _usercontroller.getLogin);
globalRouter.post(_routes["default"].login, _middlewares.onlyPublic, _usercontroller.postLogin);
globalRouter.get(_routes["default"].home, _videocontroller.home);
globalRouter.get(_routes["default"].search, _videocontroller.search);
globalRouter.get(_routes["default"].logout, _middlewares.onlyPrivate, _usercontroller.logout);
globalRouter.get(_routes["default"].github, _usercontroller.githubLogin);
globalRouter.get(_routes["default"].githubCallback, _passport["default"].authenticate("github", {
  failureRedirect: "/login"
}), _usercontroller.postGithubLogin);
globalRouter.get(_routes["default"].kakao, _usercontroller.kakaoLogin);
globalRouter.get(_routes["default"].kakaoCallback, _passport["default"].authenticate("kakao", {
  failureRedirect: "/login"
}), _usercontroller.postKakaoLogin);
globalRouter.get(_routes["default"].me, _usercontroller.getMe);
var _default = globalRouter;
exports["default"] = _default;