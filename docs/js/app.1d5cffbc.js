!function(e){function t(t){for(var r,i,u=t[0],l=t[1],d=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);f.length;)f.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,u=1;u<o.length;u++){var l=o[u];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={0:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var c=l;a.push([27,1]),o()}({27:function(e,t,o){"use strict";o.r(t);o(28),o(59),o(61);var r=o(26),n=o.n(r),a=document.querySelectorAll("[data-js-quote-wrapper]")[0],i=document.querySelectorAll("[data-js-quote]")[0],u=document.querySelectorAll("[data-js-quote-author]")[0],l=document.querySelectorAll("[data-js-quote-book]")[0],d=document.querySelectorAll("[data-js-author-portrait]")[0],c=document.querySelectorAll("[data-js-portrait-uploader]")[0],s=750/a.offsetWidth,f=document.querySelectorAll("[data-js-upload-button-wrapper]")[0],p=document.querySelectorAll("[data-js-mobile-notice]")[0];!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)&&(p.classList.remove("hidden"),f.classList.add("hidden")),window.download=function(){d.getAttribute("data-js-modified")||d.classList.add("hidden"),[i,u,l].forEach((function(e){""===e.value&&e.classList.add("hidden")})),n.a.toPng(a,{height:a.offsetHeight*s,width:a.offsetWidth*s,style:{transform:"scale("+s+")",transformOrigin:"top left",width:a.offsetWidth+"px",height:a.offsetHeight+"px"}}).then((function(e){var t=document.createElement("a");t.download="quote.png",t.href=e,t.click(),[i,u,l].forEach((function(e,t){e.classList.remove("hidden")})),d.getAttribute("data-js-modified")||d.classList.remove("hidden")})).catch((function(e){console.error("oops, something went wrong!",e)}))},window.upload=function(){var e=c;if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){d.src=e.target.result,d.setAttribute("data-js-modified",!0)},t.readAsDataURL(e.files[0])}},window.adjustHeight=function(e){e.style.height="",e.style.height=e.scrollHeight+"px"},document.onreadystatechange=function(){"interactive"==document.readyState&&i.focus()}},61:function(e,t,o){}});
//# sourceMappingURL=app.1d5cffbc.js.map