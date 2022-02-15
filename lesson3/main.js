/*
--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль

-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
*/
/*
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
 let arr =[2,4,7,8,9];
 console.log(arr);

 let arr1 =['hello','googbye','goodnight','goodafternoon','aloha'];
 console.log(arr1);

 let arr2 = ['hello','aloha', 24,35,true];
 console.log(arr2);

 let arr3 = [];
 arr3[0] = 'hello';
 arr3[1] = 'aloha';
 arr3[2] = 'bonsoir';
 arr3[3] = 'chiao';
 console.log(arr3);

 let productsToBuy = ['milk','sugar','coffee','fruits','vegetables','wine','flour','meet','fish','water'];

for (let productToBuy of productsToBuy) {
document.write(`<div>${productToBuy}</div>`)
}
for (let i = 0; i <10; i++) {
  console.log(productsToBuy [i]);
}
let music = ['blunt','beetles','nirvana','metallica','queen','madonna','john','eminem','abba','sting','roxette','drdre','falls','rhcp','him','soul','maneskin','sheeran','adele','smith',]
let f =0;
while (f<20) {
 document.write(`<h1>music</h1>`)
 f++;
}

let g=0;
while (g<20) {
 document.write(`<h1>${music[4]}</h1>`);
 g++;
}

/*let nums = [3,5,78,56,789,345,654,76,32,90];
for (let num of nums) {
 console.log(num);
}
let txt = ['one','two','three','four','five','six','seven','eight','nine','ten'];
for (let txtElement of txt) {
 console.log(txtElement);
}*/
let arrBoolean = ['one','two',true,false,45,78,'three',567,'five',389];
for (i =0; i <arrBoolean.length; i++){
 if (typeof arrBoolean[i] ==="boolean") {
  console.log(arrBoolean[i]);
 }
}
let arrNumber = ['aloha',23,false,'amigo',567,true,345,'como estas?',765];
for (g =0; g <arrNumber.length; g++) {
 if (typeof arrNumber[g] === 'number') {
  console.log(arrNumber[g]);
 }
}
let arrString = ['aloha',23,false,'amigo',567,true,345,'como estas?',765];
for (f =0; f<arrString.length; f++) {
 if (typeof arrString[f] ==='string'){
  console.log(arrString[f]);
 }
}
let arrEmpty =[];
arrEmpty[0] = 'Aloha';
arrEmpty[1] = 'Amigo';
arrEmpty[2] = 'Como Estas';
arrEmpty[3] = 'bien';
arrEmpty[4] = true;
arrEmpty[5] = 456;
arrEmpty[6] = false;
arrEmpty[7] = 'hello';
arrEmpty[8] = 569797;
arrEmpty[9] = 'goodbye';
for (let i = 0; i < arrEmpty.length; i++) {
 console.log(arrEmpty[i]);
}
for (let i = 0; i < 10; i++) {
 console.log(i);
 document.write(i);
 
}

