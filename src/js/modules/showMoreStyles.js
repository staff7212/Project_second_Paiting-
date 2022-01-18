import {getResorse} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        getResorse('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => errorMessage());
        this.remove();
    });    
    
    function createCards(res) {
        res.forEach(({src, title, link}) => {
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

    function errorMessage () {

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

};

//
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

export default showMoreStyles;