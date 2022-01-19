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

    function clickBtn (selector) {
        const btn = menu.querySelector(selector),
              example = wrapper.querySelectorAll(selector);

        btn.addEventListener('click', () => {
            if (selector != '.grandmother' && selector != '.granddad') {
                typeFilter(example);
            } else {
                typeFilter();
            } 
        });
        
    }

    clickBtn('.all');
    clickBtn('.lovers');
    clickBtn('.chef');
    clickBtn('.girl');
    clickBtn('.guy');
    clickBtn('.grandmother');
    clickBtn('.granddad');
    
    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(item => {
                item.classList.remove('active');
            });
            target.classList.add('active');
        }
    });
};

export default filter;