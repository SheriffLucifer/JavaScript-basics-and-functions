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
    const words = value.split(/\s+/);

    function sortCharacters(word) {
        return word.split("").sort().join("");
    }

    const sortedWords = words.map(word => sortCharacters(word.toLowerCase()));
    const wordMap = new Map();

    sortedWords.forEach((sortedWord, index) => {
        const originalWord = words[index];
        if (!wordMap.has(sortedWord)) {
            wordMap.set(sortedWord, [originalWord]);
        } else {
            const existingWords = wordMap.get(sortedWord);
            if (!existingWords.includes(originalWord)) {
                existingWords.push(originalWord);
            }
        }
    });

    const anagramGroups = Array.from(wordMap.values()).filter(
        words => words.length > 1
    );
    const resultWords = anagramGroups.map(words => words.join(" "));

    return resultWords.join(" ");
}

console.log(searchAnagrams("Вижу вижу"));

module.exports = searchAnagrams;
