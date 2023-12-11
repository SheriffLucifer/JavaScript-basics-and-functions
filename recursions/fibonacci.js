/**
 * Функция, которая принимает на вход индекс и возвращает число Фибоначчи с этим индексом.
 * @param {number} n - индекс числа Фибоначчи
 * @return {number} - число Фибоначчи с заданным индексом
 */

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Примеры:
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(12)); // 144
