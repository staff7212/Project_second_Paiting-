import {postData} from "../services/requests";

const drop = () => {
    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop - объект отправлен в dropArea
    //*работа с элем на странице, не из вне

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '1px solid yellow';
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = '';
    }

    ['dragenter','dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            let dots;
            if (input.files.length) {
                const arr = input.files[0].name.split('.');
                arr[0].length > 25 ? dots = '...' : dots = '.';
                const name = arr[0].substring(0, 25) + dots + arr[arr.length - 1];
                input.previousElementSibling.textContent = name;
            }

            if (input.closest('.main')){

                const formData = new FormData();
                formData.append('file', input.files[0]);

                postData('assets/server.php', formData)
                .then(data => console.log(data))
                .catch(err => console.log(err))
                .finally(() => {
                    input.value = '';
                    input.previousElementSibling.textContent = 'Файл загружен!';
                    setTimeout(() => {
                        input.previousElementSibling.textContent = 'Файл не выбран';
                    }, 2000);
                });
            }
        });
    });
};
export default drop;