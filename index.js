// 1) Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок, у якому кожен символ повторюється двічі hello ⇒ hheelllloo.

// const str = prompt('Введіть слово:');

// function doubleLetter(str) {
//   let doubleStr = "";

//   for (let i = 0; i < str.length; i++) {
//     doubleStr += str[i] + str[i];
//   }
//   alert(doubleStr);
// }

// doubleLetter(str);

// 2) Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, що є довгим рядком, який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, четвертим параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням). Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін. Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.


const str = prompt('Введіть рядок: ');
const strLength = '15';
const symbol = '*';
const toLeft = false;

function padString(str, strLength, symbol, toLeft) 

{
  if (str.length >= strLength) {
    alert(str); 
  } else if (str.length < strLength && toLeft === true) {
    alert(str.padStart(strLength,symbol)); 
  } else {
    alert(str.padEnd(strLength,symbol)); 
  }
}

padString(str, strLength, symbol, toLeft) 






