'use strict';

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let a = +prompt('Введите число a', '');
let b = +prompt('Введите число b', '');

alert(a + b);

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

function readNumber() {
    let num;

    do {
        num = +prompt('', '')
    } while (!isFinite(num));

    if (num == null || num == '') {
        return null;
    }

    return +num;
}

alert(`Число : ${readNumber()}`);

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
function random(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}