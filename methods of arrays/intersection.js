/**
 * Функция, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только элементы, которые есть в обоих массивах.
 * @param {number[]} arr1 - первый входной массив чисел
 * @param {number[]} arr2 - второй входной массив чисел
 * @return {number[]} - массив, содержащий только элементы, которые есть в обоих массивах
 */
function intersect(arr1, arr2) {
    const result = [];

    // Перебор элементов первого массива
    for (let i = 0; i < arr1.length; i++) {
        let currentElement = arr1[i];

        // Проверка, присутствует ли текущий элемент во втором массиве
        if (arr2.includes(currentElement)) {
            result.push(currentElement);
        }
    }

    return result;
}

arr1 = [1, 2, 3, 4];
arr2 = [3, 4, 5, 6];

console.log(intersect(arr1, arr2));
