'use strict';

// Перепишите с использованием функции-стрелки
function ask1(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
ask1(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

//Переписываю
function ask2(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
    
ask2(
    "Вы согласны?",
    () =>  alert("Вы согласились."),
    () =>  alert("Вы отменили выполнение.")
);


