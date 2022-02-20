
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    let n1 = 'Harry..Potter';
    let n2 = 'Ron---Whisley';
    let n3 = 'Hermione__Granger';
let name = (string, symbol) => {
    let newArr = [];
    if (string.includes(symbol)) {
        let a = string.split(symbol)
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    }
}
name(n1,'..');
name(n2,'---');
name(n3, '_');



    let nums = (length, num) => {
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * num));
    }
    return newArray;
};
let result = nums(7, 100);
console.log(result);

result.sort((a, b) => a- b);
console.log(result);
result.sort((a, b) => b- a);
console.log(result);

let filterArray = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray.filter(value => value % 2 === 0);
};
console.log(filterArray(10, 100));

let arrayB = (lenght, num) => {
    let someArray = [];
    for (let i = 0; i <lenght; i++) {
       someArray.push(Math.floor(Math.random()* num));
    }
    return someArray.map(value => value.toString());
}
console.log(arrayB(10,100));

let sortNumbers = (arr, direction) => {
   if (direction === 'asc') return arr.sort((a,b) => a-b);
   if (direction === 'desc') return arr.sort((a, b) => b-a);

}
console.log(sortNumbers([3,456,23,-56,678,974],'asc'));
console.log(sortNumbers([3,456,23,-56,678,974],'desc'));


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newArrayCourses = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(newArrayCourses);

let newFilter = coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5;
})
console.log(newFilter);

let cutString = (str, n) => {
    const result = [];
    while (str.length) {
        result.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(result)
    return result
}
document.writeln(cutString('Університет', 3));