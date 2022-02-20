// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let lenghtA = 'hello world';
console.log(lenghtA.length);

let lenghtB = 'lorem ipsum';
console.log(lenghtB.length);

let lenghtC = 'javasript is cool';
console.log(lenghtC.length);

let a = 'hello world';
let upperCase = a.toUpperCase();
console.log(upperCase);

let b = 'lorem ipsum';
let upperCaseB = b.toUpperCase();
console.log(upperCaseB);

let c = 'javascript is cool';
let upperCaseC = c.toUpperCase();
console.log(upperCaseC);

let d = 'HELLO WORLD';
let lowercase = d.toLowerCase();
console.log(lowercase);

let e = 'LOREM IPSUM';
let lowerCaseE = e.toLowerCase();
console.log(lowerCaseE);

let h = 'JAVASCRIPT IS COOL';
let lowerCaseH = h.toLowerCase();
console.log(lowerCaseH);

let string = ' dirty string   ';
let trim = string.trim();
console.log(trim);

let stringToArray = (str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToArray(str);
console.log(arr);
document.write(arr);

let delete_characters = (str, lenght) => {
    return str.substr(0,lenght);
}
let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str,7));


let strA = "HTML Javascript PHP";
let clearStrA = strA
    .replaceAll('"','')
    .replaceAll(' ', '-');
console.log(clearStrA);
document.writeln(clearStrA);

let firstUp = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)
};
document.write(firstUp('hola amigos'));
console.log(firstUp('hola amigos'));


let capitalize = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() +word.slice(1)).join(' ');
};
document.write(capitalize('hola amigos como estas'));
console.log(capitalize('hola amigos como estas'));
