/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write
- Переприсвоїти кожній змінній з завдання значення на довільне.
    Вивести кожну змінну за допомогою: console.log , alert, document.write
- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;
- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
    В однакових виразах не використовувати однакові оператори!!!*/
/*    5 ? 6 -> true
5 ? 6 -> false
5 ? 6 -> false
5 ? 6 -> false
10 ? 10 -> true
10 ? 10 -> true
10 ? 10 -> false
10 ? 10 -> false
10 ? 10 -> false
123 ? '123' -> false
123 ? '123' -> true*/

/*
- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");*/
let v = 'hello' ;
console.log ('v');
alert('v');
document.write (`<div>${v} </div>`);
let s = 'owu';
console.log ('s');
alert ('s');
document.write (`<div> ${s} </div>`);
let z = 'com';
console.log ('z');
alert('z');
document.write (`<div> ${z} </div>`);
let d ='ua';
console.log ('d');
alert('d');
document.write(`<div> ${d} </div>`);
let e = 1;
console.log('e');
alert('e');
document.write(`<div> ${e} </div>`);
let f = 10;
console.log('f');
alert('f');
document.write(`<div> ${f} </div>`);
let g = -999;
console.log('g');
alert('g');
document.write(`<div> ${g} </div>`);
let h = 123;
console.log('h');
alert('h');
document.write(`<div> ${h} </div>`);
let i = 3.14;
console.log('i');
alert('i');
document.write(`<div> ${i}</div>`);
let k = 2.7;
console.log('k');
alert('k');
document.write(`<div> ${k}</div>`);
let l = 16;
console.log('l');
alert('l');
document.write(`<div> ${l}</div>`);
let m = 'true';
console.log('m');
document.write(`<div> ${m}</div>`);
let n = false;
console.log('n');
alert('n');
document.write(`<div> ${n}</div>`);

let firstName = 'Olha';
let middleName = 'Ihorivna';
let lastName = 'Medvedieva';
let person = firstName +  middleName +  lastName;
console.log( person );

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

/*5 < 6
5 === 6
5 > 6
5 >= 6
10 === 10
10 > 10
10 < 10
10 >= 10
123 > 123
123 === 123*/





