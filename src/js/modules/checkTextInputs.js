const checkTextInputs = (selector) => {
    const textInput = document.querySelectorAll(selector);

    textInput.forEach(input => {
        input.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/[^а-яё 0-9\-]/ig, '');
            // if (e.key.match(/[^а-яё 0-9]/ig)){
            //     e.preventDefault();
            // }
        });

    });
};

export default checkTextInputs;