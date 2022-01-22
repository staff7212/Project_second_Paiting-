import {getResorse} from '../services/requests';

const priceCalc = (size, material, options, promocode, result, obj) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum, sizeValue = '', materialValue = '', optionsValue = '';

    function changeParameters(event, elem, prop) {
        elem.addEventListener(event, (e) => {
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
                } console.log(obj);
                sum = Math.round((+sizeValue) * (+materialValue) + (+optionsValue));
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
            getResorse('assets/price.json')
            .then (data => calcResult(data))
            .catch(error => console.log(error));
        });  
    }
    changeParameters('change', sizeBlock, 'size');
    changeParameters('change', materialBlock, 'material');
    changeParameters('change', optionsBlock, 'option');
    changeParameters('input', promocodeBlock);
};

export default priceCalc;