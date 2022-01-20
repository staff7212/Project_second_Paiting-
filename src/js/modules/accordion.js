const accordion = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);

    btns.forEach(btn => {

        btn.addEventListener('click', function() {

            btns.forEach(btn => {
                if (!this.classList.contains('active-style')) {
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                    btn.nextElementSibling.style.maxHeight = '0px';
                }
            });
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    //работа со стилями
    //       blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });

    
    //мой вариант, рабочий, но плохая анимация, не красиво
    // const titles = document.querySelectorAll('.accordion-heading'),
    //       contents = document.querySelectorAll('.accordion-block');

    // contents.forEach(content => {
    //     content.classList.add('animated', );
    //     content.style.display = 'none';
    // });
    

    // function showContent(block) {
    //     const content = block.nextElementSibling;
    //     if (!content.classList.contains('fadeInDown')) {
    //         content.style.display = 'block';
    //         content.classList.remove('fadeOutUp');
    //         content.classList.add('fadeInDown');
    //     } else {
    //         content.style.display = 'none';
    //         content.classList.remove('fadeInDown');
    //     }
        
    // }
    // titles.forEach(title => {
    //     title.addEventListener('click', () => {
    //         showContent(title);
    //     });
    // });
};

export default accordion;