import {calcScroll, modifyBody} from '../services/calcScroll';

const modals = (state) => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              inputs = document.querySelectorAll('input'),
              scroll = calcScroll();
        
        function openModal() {
            modal.style.display = 'block';
            modifyBody('hidden', scroll);
            //clearTimeout(timerId); //включить про готовности проекта
        }

        function closeModal(e) {
            if ((e.target === modal) || e.currentTarget === close || e.key === "Escape") {
                
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
                
                modifyBody('', scroll);
            }     
        }

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
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

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }
       
    //не нужно
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

export default modals;