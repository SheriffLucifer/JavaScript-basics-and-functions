/**
 * Функция, которая принимает на вход строку и возвращает ее обратный порядок.
 * @param {string} str - входная строка
 * @return {string} - строка, обращенная задом наперед
 */
function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

console.log(reverseString("Tenet is the middle"));
