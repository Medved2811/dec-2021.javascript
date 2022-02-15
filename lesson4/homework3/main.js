/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
- створити функцію яка обчислює та повертає площу кола з радіусом r
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
- створити функцію яка приймає масив та виводить кожен його елемент
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/

function areaRectagle (a,b) {
    let sRectagle = a * b ;
    return sRectagle ;
}console.log(areaRectagle(5,7));

function areaCicle (r) {
    let radius = r ** 2;
    let sCircle = 3.14 * radius ;
    return sCircle;
}
console.log(areaCicle(5));

function areaCylinder (h,r) {
    let sCylinder = 2 * 3.14 * r * h;
    return sCylinder;
}
console.log(areaCylinder(4,6));

let array = ['aloha',28,'amigo',34,67,'como estas'];
function acceptArray (array) {
    for (let i =0 ;i < array.lenght; i++);
    document.write(array[4]);
} acceptArray(array);

function createPar (txt) {
    document.write(`<p>${txt}</p>`);
    document.write(`<p>${txt}</p>`);
    }
createPar('Aloha');

 function createElements (arg) {
     document.write(`<ul>`)
         document.write(`<li>${arg}</li>`)
         document.write(`<li>${arg}</li>`)
         document.write(`<li>${arg}</li>`)
     document.write(`</ul>`);
 }
 createElements('aloha');

 function createUl (text,number) {
     document.write(`<ul>`)
     for (let i = 0; i < number; i++) {
         document.write(`<li>${text}</li>`)
     }
         document.write(`</ul>`)
 }
 createUl('Aloha',3);

 let newArray = ['Aloha',true,false,45,'amigo',356,'como estas'];
 function primitives (array){
     document.write(`<ol>`)
        for (let i = 0; i < array.length; i++) {
         document.write(`<li>${array [i]}</li>`)
     }
     document.write(`</ol>`)
 }
 primitives(newArray);

let newArray1 = [
    {id:1, name: 'rodrigo', age:35},
    {id:2, name: 'manuel', age:56},
    {id:3, name: 'pablo', age:23}
];
function objectArray(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}: ${arrayElement.name}, ${arrayElement.age}</div>`)
    }
}
objectArray(newArray1);




