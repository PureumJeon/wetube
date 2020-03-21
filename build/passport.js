"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_passport=_interopRequireDefault(require("passport")),_passportGithub=_interopRequireDefault(require("passport-github")),_passportKakao=_interopRequireDefault(require("passport-kakao")),_User=_interopRequireDefault(require("./models/User")),_usercontroller=require("./controllers/usercontroller"),_routes=_interopRequireDefault(require("./routes"));_passport["default"].use(_User["default"].createStrategy()),_passport["default"].use(new _passportGithub["default"]({clientID:process.env.GH_ID,clientSecret:process.env.GH_SECRET,callbackURL:"http://localhost:4000".concat(_routes["default"].githubCallback)},_usercontroller.githubLoginCallback)),_passport["default"].use(new _passportKakao["default"]({clientID:process.env.KAKAO_ID,clientSecret:"",// clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
callbackURL:"http://localhost:4000".concat(_routes["default"].kakaoCallback)},_usercontroller.kakaoLoginCallback)),_passport["default"].serializeUser(_User["default"].serializeUser()),_passport["default"].deserializeUser(_User["default"].deserializeUser());