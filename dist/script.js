/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");


document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
});

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/calcScroll */ "./src/js/services/calcScroll.js");


const modals = state => {
  let btnPressed = false;

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          inputs = document.querySelectorAll('input'),
          scroll = Object(_services_calcScroll__WEBPACK_IMPORTED_MODULE_0__["calcScroll"])();

    function openModal() {
      modal.style.display = 'block';
      Object(_services_calcScroll__WEBPACK_IMPORTED_MODULE_0__["modifyBody"])('hidden', scroll); //clearTimeout(timerId); //включить про готовности проекта
    }

    function closeModal(e) {
      if (e.target === modal || e.currentTarget === close || e.key === "Escape") {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        inputs.forEach(item => {
          item.value = '';
        });

        for (let key in state) {
          if (key == 'width' && key == 'height') {
            delete state[key];
          }
        }

        Object(_services_calcScroll__WEBPACK_IMPORTED_MODULE_0__["modifyBody"])('', scroll);
      }
    }

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        if (destroy) {
          item.remove();
        }

        btnPressed = true;

        if (modal.classList.contains('popup_calc_profile')) {
          if (!state.form || !state.width || state.width <= 0 || !state.height || state.height <= 0) {
            return;
          }
        }

        if (modal.classList.contains('popup_calc_end')) {
          if (!state.type || !state.profile) {
            return;
          }
        }

        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        openModal();
      });
    });
    close.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModal);
  }

  function showModalEndScroll(selector) {
    window.addEventListener('scroll', () => {
      const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  } //не нужно
  // функция не сработает только если будет открыта модалка
  // если она была когда-то открыта, сработает
  // function showModalByTime(selector, time) {
  //     setTimeout(function() {
  //         let display;
  //         document.querySelectorAll('[data-modal]').forEach(item => {
  //             if(getComputedStyle(item).display !== 'none') {
  //                 display = 'block';
  //             }
  //         });
  //         if (!display) {
  //             document.querySelector(selector).style.display = 'block';
  //         modifyBody('hidden', calcScroll());
  //         }
  //     }, time);
  // }
  //по готовности проекта, вызов модального окна через 60 сек
  //если была открыта модалка, не сработает
  // const timerId = setTimeout(function() {
  //     document.querySelector('.popup-consultation').style.display = 'block';
  //     modifyBody('hidden', calcScroll());
  // }, 5000);
  //showModalByTime('.popup-consultation', 5000);


  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  showModalEndScroll('.fixed-gift');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next, activClass) => {
  let slideIndex = 1,
      pause;
  const items = document.querySelectorAll(slides);

  function showSlide(num) {
    if (num > items.length) {
      slideIndex = 1;
    }

    if (num < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlide(slideIndex);

  function plusSlide(n) {
    showSlide(slideIndex += n);
  }

  try {
    const prevBtm = document.querySelector(prev),
          nextBtm = document.querySelector(next);
    prevBtm.addEventListener('click', () => {
      plusSlide(-1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
    nextBtm.addEventListener('click', () => {
      plusSlide(1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (e) {}

  function activeteAnimation() {
    if (dir === 'vertical') {
      pause = setInterval(function () {
        plusSlide(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      pause = setInterval(function () {
        plusSlide(1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight');
      }, 3000);
    }
  }

  activeteAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(pause);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activeteAnimation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/calcScroll.js":
/*!***************************************!*\
  !*** ./src/js/services/calcScroll.js ***!
  \***************************************/
/*! exports provided: calcScroll, modifyBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcScroll", function() { return calcScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyBody", function() { return modifyBody; });
const calcScroll = () => {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

function modifyBody(flow, scroll) {
  document.body.style.overflow = flow;
  document.body.style.marginRight = `${scroll}px`;
}




/***/ })

/******/ });
//# sourceMappingURL=script.js.map