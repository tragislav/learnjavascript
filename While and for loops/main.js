'use strict';

// Какое последнее значение выведет этот код? Почему?
let i = 3;

while (i) {
  alert( i-- );
} // Ответ: 1.

// Какие значения выведет цикл while?
i = 0;
while (++i < 5) alert( i ); // Ответ: 1, 2, 3, 4.

i = 0;
while (i++ < 5) alert( i ); // Ответ: 1, 2, 3, 4, 5.

// Какие значения выведет цикл for?
for (i = 0; i < 5; i++) alert( i );

for (i = 0; i < 5; ++i) alert( i );
// Ответ: от 0 до 4 в обоих случаях.
// Такой результат обусловлен алгоритмом работы for:
// 1.Выполнить единожды присваивание i = 0 перед чем-либо (начало).
// 2.Проверить условие i < 5
// 3.Если true – выполнить тело цикла alert(i), и затем i++
// Увеличение i++ выполняется отдельно от проверки условия (2), значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i.

// При помощи цикла for выведите чётные числа от 2 до 10.
for(i = 0; i <= 10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}
// Переписывыю
i = 0;

while(i < 3){
    alert(`number ${i}!`);
    i++;
}

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let num;

do{
    num = prompt('Введите число', '');
} while(num <= 100 && num);

// Вывести простые числа
let n = 10;

nextPrime: 
for(i = 2; i <= n; i++){
    for(let j = 2; j <= i; j++){
        if(i % j == 0) continue nextPrime;
    }

    alert(i);
}