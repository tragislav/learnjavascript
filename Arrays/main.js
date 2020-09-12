'use strict';

// Операции с массивами
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[(styles.length - 1) / 2] = 'Classic';
alert(styles.shift());
styles.unshift('Rap', 'Reggae');

// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
function sumInput() {
    let numbers = [];
    let sum = 0;
    while (true) {

        let value = prompt('Введите число', '');

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

alert(sumInput());

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // для каждого элемента массива
        partialSum += item; // добавляем значение элемента к partialSum
        maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
        if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3