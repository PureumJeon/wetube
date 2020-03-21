"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));require("regenerator-runtime/runtime");var streamObject,videoRecorder,_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),recorderContainer=document.getElementById("jsRecordContainer"),recordBtn=document.getElementById("jsRecordBtn"),videoPreview=document.getElementById("jsVideoPreview"),handleVideoData=function(a){var b=a.data,c=document.createElement("a");c.href=URL.createObjectURL(b),c.download="recorded.webm",document.body.appendChild(c),c.click(),console.log("\uB2E4\uC6B4\uBC1B\uC74C")},stopRecording=function(){videoRecorder.stop(),recordBtn.removeEventListener("click",stopRecording),recordBtn.addEventListener("click",getVideo),recordBtn.innerHTML="Start recording",console.log("\uB179\uD654\uB05D")},startRecording=function(){videoRecorder=new MediaRecorder(streamObject),videoRecorder.start(),videoRecorder.addEventListener("dataavailable",handleVideoData),recordBtn.addEventListener("click",stopRecording),console.log("\uB179\uD654\uC911")},getVideo=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(){var b;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:{width:1280,height:720}});case 3:b=a.sent,videoPreview.srcObject=b,videoPreview.muted=!0,videoPreview.play(),recordBtn.innerHTML="Stop recording",streamObject=b,console.log("\uBE44\uB514\uC624\uAC00\uC838\uC634"),startRecording(),a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](0),recordBtn.innerHTML=":( Can't record";case 16:return a.prev=16,recordBtn.removeEventListener=("click",getVideo),a.finish(16);case 19:case"end":return a.stop();}},a,null,[[0,13,16,19]])}));return function(){return a.apply(this,arguments)}}();function init(){recordBtn.addEventListener("click",getVideo)}recorderContainer&&init();