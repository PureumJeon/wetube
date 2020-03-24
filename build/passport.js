"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportGithub = _interopRequireDefault(require("passport-github"));

var _passportKakao = _interopRequireDefault(require("passport-kakao"));

var _User = _interopRequireDefault(require("./models/User"));

var _usercontroller = require("./controllers/usercontroller");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_passport["default"].use(_User["default"].createStrategy());

_passport["default"].use(new _passportGithub["default"]({
  clientID: process.env.GH_ID,
  clientSecret: process.env.GH_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].githubCallback)
}, _usercontroller.githubLoginCallback));

_passport["default"].use(new _passportKakao["default"]({
  clientID: process.env.KAKAO_ID,
  clientSecret: "",
  // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
  callbackURL: "http://localhost:4000".concat(_routes["default"].kakaoCallback)
}, _usercontroller.kakaoLoginCallback));

_passport["default"].serializeUser(_User["default"].serializeUser());

_passport["default"].deserializeUser(_User["default"].deserializeUser());