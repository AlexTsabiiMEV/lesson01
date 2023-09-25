// 1) Вам необхідно використовувати масив нотифікацій з минулих занять. До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор, щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином, немов працюємо з "плоским" масивом.

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

currentWeatherNotification[Symbol.iterator] = function() {
  return {
    notifications: this,
    counter: 0,

    next() {
      return { done: this.counter === this.notifications.length, value: this.notifications[this.counter++] }
    }
  };
}

for (const notif of currentWeatherNotification) {
  console.log(notif);
}

