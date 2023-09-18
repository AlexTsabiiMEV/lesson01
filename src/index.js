// 1) Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.


// const words = ["apple", "banaNA", "kiWi", "ORANGE"];


// function capitalizeStrings (words) { 

//   let capitalizeWord = words.map(item => {
//     const capitalizeFirstLetter = item.charAt(0).toUpperCase()
//     const restItems = item.slice(1).toLowerCase();
//     return capitalizeFirstLetter + restItems;
//   })

//   return capitalizeWord;

// }

// console.log(capitalizeStrings(words))


// 2) Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements (array1, array2) {

  const commonItems = [];

  for (let i = 0; i < array1.length; i += 1) {

    if (array2.includes(array1[i])){
      commonItems.push(array1[i]);
    }
  }
return commonItems;

}

console.log(findCommonElements(array1, array2)); // [3, 4, 5]




