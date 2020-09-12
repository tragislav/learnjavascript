'use strict';

// Перепишите функцию, используя оператор '?' или '||'
function checkAge1(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge2(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge3(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return 'Числа равны';
    }
}

alert(min(3, 2));

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result
}

let x = prompt('x = ', '');
let n = prompt('n = ', '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}