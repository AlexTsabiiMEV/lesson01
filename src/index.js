// 1) Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.

function logArguments(fn) {
  return function (...args) {
    console.log(`Arguments: ${args}`);
    return fn.bind(this)(...args);
  }
}

const newArgs = logArguments(function newArgs(value1, value2) {
  return value1 + value2;
});

console.log(newArgs(1, 2));

