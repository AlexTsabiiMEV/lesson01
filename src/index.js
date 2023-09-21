// 1) Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.

// const array = [1,2,3,4,5,6,7,8,9,10,100,33,32,49,72,1235,77,824,0,12489];
// const primeNumbers = primesArray(array);


// function primesArray(array) {
//   function isPrime(array) {
//     if (array <= 1) return false;
//     if (array <= 3) return true;
//     if (array % 2 === 0 || array % 3 === 0) return false;
//     for (let i = 5; i * i <= array; i += 6) {
//       if (array % i === 0 || array % (i + 2) === 0) return false;
//     }
//     return true;
//   }

//   return array.filter(isPrime);
// }

// console.log(primeNumbers); 


// 2) Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date. Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.

const currentWeatherNotification = [
  {source:'Cherkasy',text:'It is 21 degrees in Cherkasy today.',date:'2023-09-21 13:31:32'},
  {source:'Cherkasy',text:'It is 22 degrees in Cherkasy today.',date:'2023-09-21 15:17:19'},
  {source:'Cherkasy',text:'It is 23 degrees in Cherkasy today.',date:'2023-09-21 15:17:19'},
  {source:'Cherkasy',text:'It is 21 degrees in Cherkasy today.',date:'2023-09-21 15:17:19'},
  {source:'Kiyv',text:'It is 22 degrees in Kiyv today.',date:'2023-09-21 14:27:10'},
  {source:'Kiyv',text:'It is 22 degrees in Kiyv today.',date:'2023-09-21 15:37:10'},
  {source:'Kiyv',text:'It is 22 degrees in Kiyv today.',date:'2023-09-21 16:67:10'},
  {source:'Kharkiv',text:'It is 24 degrees in Kharkiv today.',date:'2023-09-21 14:11:21'},
  {source:'Kharkiv',text:'It is 24 degrees in Kharkiv today.',date:'2023-09-21 15:26:31'},
  {source:'Kharkiv',text:'It is 24 degrees in Kharkiv today.',date:'2023-09-21 17:40:24'},
  {source:'Kharkiv',text:'It is 24 degrees in Kharkiv today.',date:'2023-09-21 19:53:51'},
  {source:'Dnipro',text:'It is 25 degrees in Dnipro today.',date:'2023-09-21 15:24:48'},
  {source:'Lviv',text:'It is 20 degrees in Lviv today.',date:'2023-09-21 16:00:09'},
  {source:'Lviv',text:'It is 20 degrees in Lviv today.',date:'2023-09-21 17:00:19'},
];

const targetSource = 'Cherkasy';


function weatherNotification (currentWeatherNotification) {
for (var i = 0; i < currentWeatherNotification.length; i++) {
  let notification = currentWeatherNotification[i];
  
  if (notification.source === targetSource) {
    console.log(notification);
  }
}
}

weatherNotification(currentWeatherNotification);



