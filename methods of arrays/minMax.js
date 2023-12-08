/**
 * Функция, которая принимает на вход массив из чисел и возвращает наименьшее и наибольшее число в массиве.
 * @param {number[]} arr - входной массив чисел
 * @return {number[]} - массив, содержащий наименьшее и наибольшее число в массиве
 */
function minMax(arr) {
    if (!arr || arr.length === 0) {
        return null; // Возвращаем null для пустого массива или отсутствия входных данных
    }

    let min = arr[0];
    let max = arr[0];

    // Перебираем элементы массива, обновляя значения минимума и максимума
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Возвращаем объект с найденными минимумом и максимумом
    return [min, max];
}

let array = [4, 5, 8, 9, 6, 1, 2, 3, 10, 54, 99, 5567];

console.log(minMax(array));
