// 1) Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.

let number = prompt('Введіть число');
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else if (number <= 3) {
    isPrime = true;
} else if (number % 2 === 0 || number % 3 === 0) {
    isPrime = false;
} else {
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    alert('Число ' + number + ' є простим числом');
} else {
    alert('Число ' + number + ' не є простим числом');
}

 