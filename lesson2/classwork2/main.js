
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let first = +prompt(3)
// let second = +prompt(7);
// if (first > second) {
//     console.log(first)
// } else if (first === second) {
//     console.log('введені числа рівні');
// } else {
//     console.log(second);
// }
//
// let flatNumber = +prompt(33)
// if (flatNumber> 0 && flatNumber <= 20) {
//     console.log('first');
// } else if (flatNumber >= 21 && flatNumber <= 48) {
//     console.log('second');
// } else if (flatNumber >= 49 && flatNumber >= 90) {
//     console.log('third');
// }

let number = 45;
if (number === 10)  {
    console.log('вірно');
} else if (number !== 0) {
    console.log('невірно');
}
 let temperature = 17;
if (temperature >= 10 && temperature <=22) {
    console.log('ми йдемо вчитися');
} else {
    console.log('сидимо вдома');
}
let quiz = +prompt(3)
switch (quiz){
    case 1: quiz = 1;
    alert('congratulation! You win a car');
    break;
    case 2: quiz =2;
    alert('Congratulation!You win a motobicycle');
    break;
    case 3: quiz =3;
    alert('Congratulation! You win a phone');
    break;
    case 4: quiz =4;
    alert('Congratulation! You win 1000$');
    break;
    case 5: quiz =5;
    alert('Congratulation! You win an apartments');
    break;
    default:
        alert('You didnt win anything');
}


