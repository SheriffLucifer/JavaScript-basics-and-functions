/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const digits = number.split("").map(Number);

    const sumFirstThree = digits[0] + digits[1] + digits[2];
    const sumLastThree = digits[3] + digits[4] + digits[5];

    return sumFirstThree === sumLastThree;
}

module.exports = checkTicket;
