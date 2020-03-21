"use strict";require("core-js/modules/es6.object.define-property"),Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;// Global
var HOME="/",JOIN="/join",LOGIN="/login",LOGOUT="/logout",SEARCH="/search",USERS="/users",USER_DETAIL="/:id",EDIT_PROFILE="/edit-profile",CHANGE_PASSWORD="/change-password",ME="/me",VIDEOS="/videos",UPLOAD="/upload",VIDEO_DETAIL="/:id",EDIT_VIDEO="/:id/edit",DELETE_VIDEO="/:id/delete",GITHUB="/auth/github",GITHUB_CALLBACK="/auth/github/callback",KAKAO="/auth/kakao",KAKAO_CALLBACK="/auth/kakao/callback",API="/api",REGISTER_VIEW="/:id/view",ADD_COMMENT="/:id/comment",routes={home:"/",join:JOIN,login:LOGIN,logout:LOGOUT,search:SEARCH,users:USERS,userDetail:function userDetail(a){return a?"/users/".concat(a):USER_DETAIL},editProfile:EDIT_PROFILE,changePassword:CHANGE_PASSWORD,videos:VIDEOS,upload:UPLOAD,videoDetail:function videoDetail(a){return a?"/videos/".concat(a):VIDEO_DETAIL},editVideo:function editVideo(a){return a?"/videos/".concat(a,"/edit"):EDIT_VIDEO},deleteVideo:function deleteVideo(a){return a?"/videos/".concat(a,"/delete"):DELETE_VIDEO},github:GITHUB,githubCallback:GITHUB_CALLBACK,me:ME,kakao:KAKAO,kakaoCallback:KAKAO_CALLBACK,api:API,registerView:REGISTER_VIEW,addComment:ADD_COMMENT},_default=routes;exports["default"]=_default;