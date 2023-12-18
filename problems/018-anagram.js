/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */

function anagram(x, y) {
    if (x === "" || y === "") {
        return false;
    }

    // Преобразование строк в нижний регистр для унификации сравнения.
    x = x.toLowerCase();
    y = y.toLowerCase();

    // Проверка на равную длину строк.
    if (x.length !== y.length) {
        return false;
    }

    // Сортировка символов в строках и их сравнение.
    const sortedX = Array.from(x).sort().join("");
    const sortedY = Array.from(y).sort().join("");

    return sortedX === sortedY;
}

module.exports = anagram;
