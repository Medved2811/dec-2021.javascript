// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//

    let areaRectangle = (a, b) => a * b;
    console.log(areaRectangle(4, 5));
    document.write('S = ' + areaRectangle(4, 5));

    const areaCirle = (r) => {
        let radius = r ** 2;
        return 3.14 * radius;
    }
        console.log(areaCirle(5));
        document.write('S =' + areaCirle(5));

    const areaCylinder = (r,h) => {
      return 2 * 3.14 * r * h;
    }
    console.log (areaCylinder(5,12));
    document.write('S =' + areaCylinder(5,12));

    let array = ['aloha' ,28 ,'amigo' ,34 ,67 ,'como estas'];
    const acceptArray = (array) => {
        for (let i = 0; i < array.length; i++) {
         document.write(array[i]) ;
        }
    }
    acceptArray(array);

    const createPar = (txt) => {
    document.write(`<p>${txt}</p>`);
    document.write(`<p>${txt}</p>`);
        for (let i = 0; i <= 10; i++) {
            document.write(`<p>${i} - ${txt}</p>`);
        }
}
createPar('Aloha');

    const createElements = (arg) => {
        document.write(`<ul>`)
        document.write(`<li>${arg}</li>`)
        document.write(`<li>${arg}</li>`)
        document.write(`<li>${arg}</li>`)
        document.write(`</ul>`);
        }
    createElements('Aloha');

const createUl = (text,number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
        document.write(`</ul>`);
    }
createUl('Aloha',3);

let newArray = ['Aloha',true,false,45,'amigo',356,'como estas'];
const primitives =(array) => {
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
const objectArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}: ${arrayElement.name}, ${arrayElement.age}</div>`)
    }
}
objectArray(newArray1);

