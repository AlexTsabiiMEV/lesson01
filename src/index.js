// 1) Напишіть функцію, яка приймає масив чисел як аргумент і повертаєPromise.Promiseмає бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.

const newArray = [1,2,3,4,5,6];

  function sumArrayPromise(newArray) {
    return new Promise((resolve) => {
      setTimeout(() => {
        var sum = 0;
        for (var i = 0; i < newArray.length; i++) {
        sum += newArray[i];}
        resolve(sum);
      }, 3000);
    });
  }
  
  sumArrayPromise(newArray)
    .then(result => {
      console.log(result);
    });