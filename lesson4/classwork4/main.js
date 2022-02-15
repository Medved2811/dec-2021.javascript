// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function numberMin (num1, num2, num3) {
    if (num1 <num2 && num1 <num3) {
        document.write(num1);
        console.log(num1);
    } else if (num2 <num1 && num2<num3) {
        document.write(num2);
        console.log(num2);
    } else {
        console.log(num3);
        document.write(num3);
    }
} numberMin(34,56,78);

function numberMax (number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        console.log(number1);
        document.write(number1);
    } else if (number2 > number1 && number2 > number3) {
        console.log(number2);
        document.write(number2);
    } else {
        console.log(number3);
        document.write(number3);
    }
}numberMax(456,999,378);

let maxArray = [456,789,3,56,78,234];
function arrayMax (array) {
    let max = array[0];
    for (const element of array) {
        if (element > max) {
            max = element;
    }
    }return max;

}document.write(`<h1> ${arrayMax(maxArray)}</h1>`)
console.log(maxArray);

let minArray = [45,698,21,34,367,7659];
function arrayMin(array) {
    let min = array[0];
    for (const element of array) {
        if (element < min) {
            min = element;
        }
    }
    return min;
} document.write(`<h1> ${arrayMin(minArray)}</h1>`);

let  addArray = [33,23,68,43];
function addElement (array) {
    let add = 0;
    for (const arrayElement of array) {
        add = arrayElement + add;
    }return add;
}document.write(addElement(addArray));

let averageArray = [22,67,45,67];
function average (array) {
    let num = 0;
    for (const arrayElement of array) {
        num += arrayElement;
        num = arrayElement + num;
    } return num/array.length;
} document.write(average(averageArray));

function numRandom (lenght) {
    let arrayVacant = [];
    for (let i = 0; i < lenght; i++) {
       arrayVacant.push(Math.floor(Math.random()*100));
    } return arrayVacant;
}document.write(numRandom(7));

function numberRandom(lenght, limit) {
    let arrayEmpty = [];
    for (let i = 0; i < lenght; i++) {
        arrayEmpty.push(Math.floor(Math.random()* limit));
    } return arrayEmpty;
} document.write(numberRandom(3,100));


function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0, ri = 0; i--, ri++) {
        newArr[ri] = arr[i];
    }
    return newArr;
}

console.log(reverse([10,20,30]));








