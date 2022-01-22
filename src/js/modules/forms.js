import {postData} from '../services/requests';

const forms = (obj) => {
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
        document.querySelector('textarea').value = '';
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            if (item.files.length) {
                const arr = item.files[0].name.split('.');
                arr[0].length > 15 ? dots = '...' : dots = '.';
                const name = arr[0].substring(0, 15) + dots + arr[arr.length - 1];
                item.previousElementSibling.textContent = name;
            }
        });
    });

    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
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

            postData (api, formData)
            .then(data => {
                console.log(data);
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;
            })
            .catch(() => {
                statusImg.setAttribute('src', message.fail);
                textMessage.textContent = message.failure;
            })
            .finally(() => {
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
                    document.querySelector('.calc-price').textContent = 
                    'Для расчета нужно выбрать размер картины и материал картины';
                }, 3000);
            });
        });
    }
};

export default forms;