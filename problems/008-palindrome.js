/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */

function isPalindrome(value) {
    const lowerCaseValue = value.toLowerCase();

    const reversedValue = lowerCaseValue.split("").reverse().join("");

    return lowerCaseValue === reversedValue;
}

module.exports = isPalindrome;
