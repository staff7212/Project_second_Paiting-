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
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_priceCalc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/priceCalc */ "./src/js/modules/priceCalc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");









document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const pictureParameters = {};
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_priceCalc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price', pictureParameters);
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(pictureParameters);
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]'); //showMoreStyles('.button-styles', '.styles-2'); //когда карточки в вёрстке

  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
});

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const textInput = document.querySelectorAll(selector);
  textInput.forEach(input => {
    input.addEventListener('input', function (e) {
      e.target.value = e.target.value.replace(/[^а-яё 0-9\-]/ig, ''); // if (e.key.match(/[^а-яё 0-9]/ig)){
      //     e.preventDefault();
      // }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        exampleAll = wrapper.querySelectorAll('.all'),
        noExamples = document.querySelector('.portfolio-no');

  function hideElem(element) {
    element.style.display = 'none';
    element.classList.remove('animated', 'fadeIn');
  }

  function showElem(element) {
    element.style.display = 'block';
    element.classList.add('animated', 'fadeIn');
  }

  function typeFilter(exampleType) {
    exampleAll.forEach(example => {
      hideElem(example);
    });
    hideElem(noExamples);

    if (exampleType) {
      exampleType.forEach(example => {
        showElem(example);
      });
    } else {
      showElem(noExamples);
    }
  } // function clickBtn (selector) {
  //     const btn = menu.querySelector(selector),
  //           examples = wrapper.querySelectorAll(selector);
  //     btn.addEventListener('click', () => {
  //         if (selector != '.grandmother' && selector != '.granddad') {
  //             typeFilter(examples);
  //         } else {
  //             typeFilter();
  //         } 
  //     });
  // }
  // clickBtn('.all');
  // clickBtn('.lovers');
  // clickBtn('.chef');
  // clickBtn('.girl');
  // clickBtn('.guy');
  // clickBtn('.grandmother');
  // clickBtn('.granddad');
  //более короткий вариант функции clickBtn
  // menu.addEventListener('click', (e) => {
  //     let classSelect = e.target.classList[0];
  //     let examples = wrapper.querySelectorAll(`.${classSelect}`);
  //     if (classSelect != 'grandmother' && classSelect != 'granddad') {
  //         typeFilter(examples);
  //     } else {
  //         typeFilter();
  //     }  
  // });
  //еще более практичный вариант исполнения


  menu.addEventListener('click', e => {
    const target = e.target;

    if (target && target.tagName == 'LI') {
      items.forEach(item => {
        item.classList.remove('active');
      });
      target.classList.add('active');
      let classSelect = e.target.classList[0];
      let examples = wrapper.querySelectorAll(`.${classSelect}`);

      if (classSelect != 'grandmother' && classSelect != 'granddad') {
        typeFilter(examples);
      } else {
        typeFilter();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const forms = obj => {
  const forms = document.querySelectorAll('.form'),
        inputs = document.querySelectorAll('input'),
        windows = document.querySelectorAll('[data-modal]'),
        upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };
  forms.forEach(item => {
    bindPostData(item);
  });

  const clearInput = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 25 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 25) + dots + arr[arr.length - 1];
      item.previousElementSibling.textContent = name;
    });
  });

  function bindPostData(form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.appendChild(statusMessage);
      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(form);

      if (form.classList.contains('calc_form')) {
        for (let key in obj) {
          formData.append(key, obj[key]);
        }
      }

      let api;
      form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(data => {
        console.log(data);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInput();
        setTimeout(() => {
          statusMessage.remove();
          windows.forEach(item => {
            item.style.display = 'none';
          });
          document.body.style.overflow = '';
          form.style.display = 'block';
          form.classList.remove('fadeOutUp');
          form.classList.add('fadeInUp');
          document.querySelectorAll('select').forEach(sel => sel.selectedIndex = 0);

          for (let key in obj) {
            delete obj[key];
          }

          document.querySelector('.calc-price').style.fontSize = '14px';
          document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        }, 3000);
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosirion = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+ 7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length || this.selectionStart < 4 && this.selectionEnd < 4) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length < 6) {
        this.value = '';
      }
    } else {
      setCursorPosirion(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
    input.addEventListener('click', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

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


const modals = () => {
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
        }); //
        // for (let key in state) {
        //     if (key == 'width' && key == 'height') {
        //         delete state[key];
        //     }  
        // }

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

        btnPressed = true; //
        // if (modal.classList.contains('popup_calc_profile')) {
        //     if (!state.form || !state.width || state.width <= 0 || !state.height || state.height <= 0) {
        //         return;
        //     }
        // }
        // //
        // if (modal.classList.contains('popup_calc_end')) {
        //     if (!state.type || !state.profile) {
        //         return;
        //     }
        // }

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

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);

  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }

  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/priceCalc.js":
/*!*************************************!*\
  !*** ./src/js/modules/priceCalc.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const priceCalc = (size, material, options, promocode, result, obj) => {
  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
  let sum,
      sizeValue = '',
      materialValue = '',
      optionsValue = '';

  function changeParameters(event, elem, prop) {
    elem.addEventListener(event, e => {
      const target = e.target,
            select = target.id;

      function calcResult(data) {
        for (let key in data[select]) {
          obj[prop] = elem.value;

          if (elem.value === key) {
            switch (select) {
              case 'size':
                sizeValue = data[select][key];
                break;

              case 'material':
                materialValue = data[select][key];
                break;

              case 'options':
                optionsValue = data[select][key];
                break;
            }
          }
        }

        console.log(obj);
        sum = Math.round(+sizeValue * +materialValue + +optionsValue);

        if (sizeBlock.value == '' || materialBlock.value == '') {
          resultBlock.textContent = 'Пожалуйста, выберете размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
          obj['promo'] = true;
          resultBlock.textContent = Math.round(sum * 0.7);
        } else {
          resultBlock.style.fontSize = '2em';
          resultBlock.textContent = sum + ' рублей';
        }
      }

      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResorse"])('assets/price.json').then(data => calcResult(data)).catch(error => console.log(error));
    });
  }

  changeParameters('change', sizeBlock, 'size');
  changeParameters('change', materialBlock, 'material');
  changeParameters('change', optionsBlock, 'option');
  changeParameters('input', promocodeBlock);
};

/* harmony default export */ __webpack_exports__["default"] = (priceCalc);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  btn.addEventListener('click', function () {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResorse"])('http://localhost:3000/styles').then(res => createCards(res)).catch(error => errorMessage());
    this.remove();
  });

  function createCards(res) {
    res.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      const element = document.createElement('div');
      element.classList.add('animated', 'fadeUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      element.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).append(element);
    });
  }

  function errorMessage() {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('status');
    let errorImg = document.createElement('img');
    errorImg.setAttribute('src', 'assets/img/fail.png');
    errorMessage.appendChild(errorImg);
    let textMessage = document.createElement('div');
    textMessage.textContent = "Что-то пошло не так";
    errorMessage.append(textMessage);
    document.querySelector('.styles .container').append(errorMessage);
    setTimeout(() => {
      errorMessage.remove();
    }, 2000);
  }
}; //
//когда карточки скрыты в верстке
//лишь удаляем и добавляем опред классы
// const showMoreStyles = (trigger, styles) => {
//     const cards = document.querySelectorAll(styles),
//           btn = document.querySelector(trigger);
//     cards.forEach(card => {
//         card.classList.add('animated', 'fadeUp');
//     });
//     btn.addEventListener('click', () => {
//         cards.forEach(card => {
//             card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
//             card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
//         });
//         btn.remove();
//     });


/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next) => {
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




/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResorse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResorse", function() { return getResorse; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};

const getResorse = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map