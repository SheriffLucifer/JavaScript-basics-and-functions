/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

function union(a, b) {
    const commonElements = [];

    for (let i = 0; i < a.length; i++) {
        // Проверяем, содержится ли текущий элемент массива a в массиве b.
        if (b.includes(a[i])) {
            // Если элемент содержится в обоих массивах:

            // Проверяем, был ли этот элемент уже добавлен в commonElements.
            if (!commonElements.includes(a[i])) {
                // Если элемент не был добавлен, добавляем его в commonElements.
                commonElements.push(a[i]);
            }
        }
    }

    // Сортируем commonElements по возрастанию.
    commonElements.sort((a, b) => a - b);

    return commonElements;
}

module.exports = union;
