"use strict";var _app=_interopRequireDefault(require("./app"));var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_dotenv=_interopRequireDefault(require("dotenv"));require("./db");require("./models/Video"),require("./models/Comment"),require("./models/User"),_dotenv["default"].config();var PORT=process.env.PORT||4e3,handleListening=function(){return console.log("\u2714 Listening on : http://localhost:".concat(PORT))};_app["default"].listen(PORT,handleListening);