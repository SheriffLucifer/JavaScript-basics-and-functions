/**
 * Функция, которая принимает на вход массив строк и возвращает массив строк, содержащих только уникальные значения.
 * @param {string[]} arr - входной массив строк
 * @return {string[]} - массив строк, содержащий только уникальные значения
 */
function uniqueStrings(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let currentString = arr[i];

        // Проверяем, есть ли текущая строка в уникальном массиве
        if (!uniqueArray.includes(currentString)) {
            uniqueArray.push(currentString);
        }
    }

    return uniqueArray;
}

console.log(
    uniqueStrings([
        "dsagadfg",
        "2325615156",
        "dsagadfg",
        "adlvblhjr,bfhja,bfhjd",
        "2325615156",
        "adlvblhjr,bfhja,bfhjd",
    ])
);
