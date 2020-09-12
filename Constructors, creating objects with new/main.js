'use strict';

// Создание калькулятора при помощи конструктора
function Calculator() {
    this.read = function () {
        this.a = +prompt('a = ', '');
        this.b = +prompt('b = ', '');
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Напишите функцию-конструктор Accumulator(startingValue)
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Введите значение которое мы прибавим к value', '')
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений