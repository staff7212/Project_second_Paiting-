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

export default sliders;