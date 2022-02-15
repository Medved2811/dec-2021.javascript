// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let numArray = [2,17,13,6,22,31,45,66,100,-18];
i = 0;
while (i < numArray.length) {
    console.log(numArray[i]);
    i++;
}
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);

}
i = 0;
while (i < numArray.length) {
    if (i%2 !==0) {
        console.log(numArray[i])
    }
    i++;
}
for (let i = 0; i < numArray.length; i++) {
    if (i%2 !==0) {
        console.log(numArray[i]);
    }
}
i = 0;
while (i < numArray.length) {
    if (i%2 ===0) {
        console.log(numArray[i]);
    }
    i++;
}
for (let i = 0; i < numArray.length; i++) {
    if (i%2 ===0) {
        console.log(numArray[i]);
    }
}
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i]%3 ===0) {
        numArray[i]= "Okten";
        console.log(numArray[i]);
    }
} console.log(numArray);

let numArrayReverse = [2,17,13,6,22,31,45,66,100,-18];
for (let i = numArrayReverse.length -1;i >=0; i--) {
console.log(numArrayReverse[i]);

}