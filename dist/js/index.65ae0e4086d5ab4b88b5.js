(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
function printMe() {
    console.log("development");
}

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "dSPy");

// import _ from 'lodash';
// import './style.css';
// import '../build/server/serverWork.js';

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的，"-",通过webpack里定义了
    element.innerHTML = _.join(['Hello', '33333333'], ' ');
    element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, 'Hello webpack!');

    return element;
}

  document.body.appendChild(component());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! lodash */ "LvDl")))

/***/ })

},[["tjUo","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZixnQkFBZ0IsYUFBb0I7QUFDcEMsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFLOztBQUUzQjtBQUNBOztBQUVBLHlDIiwiZmlsZSI6ImpzL2luZGV4LjY1YWUwZTQwODZkNWFiNGI4OGI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcclxufSIsImltcG9ydCBQcmludCBmcm9tICcuL3ByaW50JztcclxuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbi8vIGltcG9ydCAnLi4vYnVpbGQvc2VydmVyL3NlcnZlcldvcmsuanMnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvLyBsb2Rhc2gg5piv55Sx5b2T5YmNIHNjcmlwdCDohJrmnKwgaW1wb3J0IOWvvOWFpei/m+adpeeahO+8jFwiLVwiLOmAmui/h3dlYnBhY2vph4zlrprkuYnkuoZcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnMzMzMzMzMzMnXSwgJyAnKTtcclxuICAgIGVsZW1lbnQub25jbGljayA9IFByaW50LmJpbmQobnVsbCwgJ0hlbGxvIHdlYnBhY2shJyk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==