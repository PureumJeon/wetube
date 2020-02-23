import express from "express";
import routes from "../routes";
import {
  video,
  upload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videocontroller";

const videoRouter = express.Router();

videoRouter.get(routes.videos, video);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;