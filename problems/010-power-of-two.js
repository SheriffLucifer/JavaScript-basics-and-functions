/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */

function getPower(n) {
    // Проверяем условия, при которых невозможно найти степень двойки.
    if (n <= 0 || (n & (n - 1)) !== 0) {
        // Если n не положительное или не является степенью двойки, возвращаем undefined.
        return undefined;
    }

    let power = 0;

    // Пока n больше 1, делим его на 2 и увеличиваем счетчик степени.
    while (n > 1) {
        n /= 2;
        power++;
    }

    return power;
}

module.exports = getPower;
