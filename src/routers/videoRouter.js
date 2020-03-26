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
} from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";

const videoRouter = express.Router();
//upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

//video detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//delete video
videoRouter.get(routes.videos, video);
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
