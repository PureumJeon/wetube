"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));require("core-js/modules/es6.regexp.split"),require("regenerator-runtime/runtime");var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_axios=_interopRequireDefault(require("axios")),addCommentForm=document.getElementById("jsAddComment"),commentList=document.getElementById("jsCommentList"),commentNumber=document.getElementById("jsCommentNumber"),increaseNumber=function(){commentNumber.innerHTML=parseInt(commentNumber.innerHTML,10)+1},addComment=function(a){var b=document.createElement("li"),c=document.createElement("span");c.innerHTML=a,b.appendChild(c),commentList.prepend(b),increaseNumber()},sendComment=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b){var c,d;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=window.location.href.split("/videos/")[1],a.next=3,(0,_axios["default"])({url:"/api/".concat(c,"/comment"),method:"POST",data:{comment:b}});case 3:d=a.sent,200===d.status&&addComment(b);case 5:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),handleSubmit=function(a){a.preventDefault();var b=addCommentForm.querySelector("input"),c=b.value;sendComment(c),b.value=""};function init(){addCommentForm.addEventListener("submit",handleSubmit)}addCommentForm&&init();