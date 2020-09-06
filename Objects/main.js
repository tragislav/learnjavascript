'use strict';

// Привет, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}

multiplyNumeric(menu);