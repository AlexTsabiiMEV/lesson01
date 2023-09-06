// 1) Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.


const str = prompt('Введіть ваш текст:');



function reverseString(str) {
    let newText = '';
    for (i = str.length-1; i >= 0; i--) {
        newText += str[i];
      }
      alert(newText);
}

reverseString(str);



// 2) Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.


// const nolan = prompt('Введіть слово');

// function isPalindrome(nolan) {
//     let firstLetter = 0;
//     let secondLetter = nolan.length - 1;

//     while (firstLetter < secondLetter) {
//         if (nolan.length <= 3 || nolan[firstLetter] != nolan[secondLetter]) {
//             alert('Word ' + nolan + ' is not palindrom');
//             return;
//         } 
//         firstLetter++;
//         secondLetter--;
//     }
//     alert('Word ' + nolan + ' is a palindrom');

// }

// isPalindrome(nolan);

