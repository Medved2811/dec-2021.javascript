/*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).


- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)


- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
*/

let time = +prompt("24");
    if (time >=0 && time <=14) {
    console.log('first quarter');
    }   else if (time >=15 && time <= 29)
    {
    console.log('second quarter');
    }   else if (time >=30 && time <=44) {
    console.log('third quarter')
    }    else if (time>=45 && time <=59){
    console.log('fourth quarter')
    }
let day = +prompt("26") ;
    if (day >=0 && day<=9){
        console.log('firstDecade');
    } else if (day >=10 && day <=19) {
        console.log('secondDecade');
    } else if (day >=20 && day <=31) {
        console.log('thirdDecade');
    }
let test = confirm('???') ? 'Вірно': 'Невірно';
    console.log(test);

let number = +prompt('1');
if (number !==0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

let planForWeek = +prompt(4);
switch (planForWeek) {
    case 1: console.log('Monday: time to study');
    break;
    case 2: console.log('Tuesday: go to the gym');
    break;
    case 3: console.log('Wednesday: to do homework');
    break;
    case 4: console.log('Thursday: cooking evening and study');
    break;
    case 5: console.log('Friday: hang out with friends');
    break;
    case 6: console.log('Saturday: time to relax');
    break;
    case 7: console.log('Sunday: visit parents and study');
    break;
}













