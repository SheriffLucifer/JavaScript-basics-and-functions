/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */

function searchAnagrams(value) {
    // Разбиваем входное значение на массив слов и удаляем небуквенные символы
    let str = value.split(/\s+/).map(w => w.replace(/[^\wa-яА-Я]/g, ""));

    // Определяем функцию для сортировки символов в слове
    const sortStr = word => word.toLowerCase().split("").sort().join("");

    // Создаем объект для хранения отсортированных слов и анаграмм
    const sortedStr = {};
    const anagram = {};

    // Отображаем каждое слово и сохраняем его отсортированную версию.
    str.map(w => {
        sortedStr[w] = sortStr(w);
    });

    // Находим анаграммы среди отсортированных слов
    const anagrams = Object.values(sortedStr).filter(
        (word, index, anagrams) => {
            return anagrams.indexOf(word) !== index;
        }
    );

    // Отфильтровываем слова без анаграмм
    const withoutAnagrams = Object.values(sortedStr).filter(
        word => !anagrams.includes(word)
    );

    // Заполняем объект анаграммами
    for (let key in sortedStr) {
        if (
            sortedStr.hasOwnProperty(key) &&
            !withoutAnagrams.includes(sortedStr[key])
        ) {
            anagram[key] = sortedStr[key];
        }
    }

    // Преобразуем объект анаграмм в строку
    const result = Object.keys(anagram).join(" ");

    return result;
}

module.exports = searchAnagrams;
