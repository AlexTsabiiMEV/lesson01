// 1) Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.


function logArguments(fn) {
  return fn.bind(null, ...arguments);
}

const fullName = {
  firstName: 'Alex',
  surename: 'Tsabii',
};

function printFullName(firstName, surename) {
  return (fullName.firstName + ' ' + fullName.surename);
}

const decoratedFunction = logArguments(printFullName);

console.log(decoratedFunction(fullName.firstName, fullName.surename));

