"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes.js"));

var _videocontroller = require("../controllers/videocontroller.js");

var _middlewares = require("../middlewares.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var videoRouter = _express["default"].Router(); //upload


videoRouter.get(_routes["default"].upload, _middlewares.onlyPrivate, _videocontroller.getUpload);
videoRouter.post(_routes["default"].upload, _middlewares.onlyPrivate, _middlewares.uploadVideo, _videocontroller.postUpload); //video detail

videoRouter.get(_routes["default"].videoDetail(), _videocontroller.videoDetail); //Edit video

videoRouter.get(_routes["default"].editVideo(), _middlewares.onlyPrivate, _videocontroller.getEditVideo);
videoRouter.post(_routes["default"].editVideo(), _middlewares.onlyPrivate, _videocontroller.postEditVideo); //delete video

videoRouter.get(_routes["default"].videos, _videocontroller.video);
videoRouter.get(_routes["default"].deleteVideo(), _middlewares.onlyPrivate, _videocontroller.deleteVideo);
var _default = videoRouter;
exports["default"] = _default;