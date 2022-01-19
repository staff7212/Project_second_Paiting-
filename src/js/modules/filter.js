const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          exampleAll = wrapper.querySelectorAll('.all'),
          noExamples = document.querySelector('.portfolio-no');
    
    function typeFilter (exampleType) {
        exampleAll.forEach(example => {
            example.style.display = 'none';
            example.classList.remove('animated', 'fadeIn');
        });

        noExamples.style.display = 'none';
        noExamples.classList.remove('animated', 'fadeIn');

        if(exampleType) {
            exampleType.forEach(example => {
                example.style.display = 'block';
                example.classList.add('animated', 'fadeIn');
            });
        } else {
            noExamples.style.display = 'block';
            noExamples.classList.add('animated', 'fadeIn');
        } 
    }

    // function clickBtn (selector) {
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
    menu.addEventListener('click', (e) => {
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

export default filter;