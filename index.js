//Task 1
/*
Добавьте JavaScript к кнопке button, 
чтобы при нажатии элемент 
<div id="text">Remove me</div> исчезал.
*/


//Solution
// const click = document.getElementById('btn');
// const txt = document.getElementById('text');

// click.onclick = () => {
//     txt.hidden = true;
// }



//Task 2
/*
В переменной `button` находится кнопка. Изначально на ней нет обработчиков.

Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);
*/


//Solution
//запустится сначала метод addEventListener, далее он удаляется и запускается метод onclick, 
//то есть данный кусок кода у нас будет идти синхронно/осоновной поток JS



//Task 3
/*
Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия. 
*/

//Solution
//можно будет его разобрать?
