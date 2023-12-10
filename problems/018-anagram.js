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

    x = x.toString().toLowerCase();
    y = y.toString().toLowerCase();

    // Если строки (или числа) имеют разную длину, они не могут быть анаграммами
    if (x.length !== y.length) {
        return false;
    }

    // Преобразуем строки в массивы символов, сортируем их и объединяем обратно в строки
    const sortedX = Array.from(x).sort().join("");
    const sortedY = Array.from(y).sort().join("");

    // Сравниваем отсортированные строки
    return sortedX === sortedY;
}

module.exports = anagram;
