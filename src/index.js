1) Напишіть функцію-генераторfibonacci, яка повертає наступне число Фібоначчі при кожному виклику. Генератор повинен зупинитися після досягнення заданої межіn.

function* fibonacci(limit) {
  let initialVal = 0;
  let currentVal = 1;
  while (initialVal <= currentVal) {
    yield initialVal;
    [initialVal, currentVal] = [currentVal, initialVal + currentVal];
  }
}

const fibGen = fibonacci(10);

console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);