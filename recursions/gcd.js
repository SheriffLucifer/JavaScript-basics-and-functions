/**
 * Функция, которая принимает на вход два числа и возвращает их наибольший общий делитель.
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @return {number} - наибольший общий делитель
 */

function gcd(a, b) {
    if (b === 0) {
        return a;
    }

    // Рекурсивный вызов с новыми аргументами
    return gcd(b, a % b);
}

// Примеры:
console.log(gcd(8, 12)); // 4
console.log(gcd(18, 24)); // 6
console.log(gcd(35, 42)); // 7
console.log(gcd(111, 259)); // 37
