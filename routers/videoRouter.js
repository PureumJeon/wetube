import express from "express";
import routes from "../routes";
import {
  video,
  videoDetail,
  deleteVideo,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo
} from "../controllers/videocontroller";
import { UploadVideo } from "../middlewares";

const videoRouter = express.Router();
//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, UploadVideo, postUpload);

//video detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//delete video
videoRouter.get(routes.videos, video);
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
