'use strict';

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str) {
    if (!str) {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("вася"));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    if (lowerStr.indexOf('viagra') != -1 || lowerStr.indexOf('xxx') != -1) {
        return true;
    }

    return false;
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '...';
    } else {
        return str;
    }
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert(extractCurrencyValue('$120') === 120); // true