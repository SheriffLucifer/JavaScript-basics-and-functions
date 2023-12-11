/**
 * Функция, которая принимает на вход строку и возвращает true, если она является палиндромом, и false в противном случае.
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом, и false в противном случае
 */

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, "");

    // Сравниваем первый и последний символы строки
    if (cleanStr[0] === cleanStr[cleanStr.length - 1]) {
        // Рекурсивный вызов для следующих символов
        return isPalindrome(cleanStr.slice(1, cleanStr.length - 1));
    } else {
        return false;
    }
}

// Примеры:
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
