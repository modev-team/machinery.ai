!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),a=function(){function t(e){n(this,t),this.body=document.querySelector("body"),this.modal=document.querySelector(".modal-section-container"),this.modalOpenButton=e,this.modalFormType=this.modalOpenButton.getAttribute("data-form"),this.modalForms=document.querySelectorAll(".modal-form"),this.modalCloseButton=document.querySelector(".modal-close-button"),this.addEventListeners()}return r(t,[{key:"openModal",value:function(){for(var t=0;this.modalForms.length>t;t++)this.modalForms[t].getAttribute("data-form")===this.modalFormType&&this.modalForms[t].setAttribute("data-state","active");this.body.setAttribute("data-state","inactive"),this.modal.setAttribute("data-state","active")}},{key:"closeModal",value:function(){for(var t=0;this.modalForms.length>t;t++)this.modalForms[t].setAttribute("data-state","inactive");this.body.setAttribute("data-state","active"),this.modal.setAttribute("data-state","inactive")}},{key:"addEventListeners",value:function(){this.modalOpenButton.addEventListener("click",this.openModal.bind(this)),this.modalCloseButton.addEventListener("click",this.closeModal.bind(this))}}]),t}();e.default=a},function(t,e,o){"use strict";var n=o(0),r=function(t){return t&&t.__esModule?t:{default:t}}(n);!function(){var t=document.querySelectorAll(".modal-button");if(t)for(var e=0;t.length>e;e++)new r.default(t[e])}()}]);