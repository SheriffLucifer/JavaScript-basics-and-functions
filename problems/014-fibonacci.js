/**
 * Последовательностью Фибоначчи называется последовательность чисел
 * a0, a1, ..., an, ..., где
 * a0 = 0,
 * a1 = 1,
 * ak = ak-1 + ak-2 (k > 1).
 *
 * Напишите функцию fibonacci(n) вычисляющую n-ное число последовательности
 *
 * Пример:
 *
 * fibonacci(2) === 1
 * fibonacci(3) === 2
 * fibonacci(7) === 13
 *
 * @param {number} n >= 0
 * @returns {number}
 */

function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
        // Если n больше 1, выполняем итерацию для вычисления числа в последовательности.
    } else {
        let a = 0;
        let b = 1;

        // Итеративно вычисляем числа в последовательности до достижения n-го числа.
        for (let i = 2; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }

        return b;
    }
}

module.exports = fibonacci;
