/**
    Задача "Flatten".
    Напишите функцию flatten(arr), которая принимает массив, содержащий вложенные массивы, и возвращает новый массив,
    в котором все элементы исходного массива и его вложенных массивов расположены на одном уровне.
    Например, flatten([1, [2, 3], [4, [5, 6]]]) должна вернуть [1, 2, 3, 4, 5, 6].
* */
function flatten(arr) {
    let result = [];

    // Перебор элементов входного массива
    for (let i = 0; i < arr.length; i++) {
        // Проверка, является ли текущий элемент массивом
        if (Array.isArray(arr[i])) {
            let newArray = flatten(arr[i]);

            // Добавляем все элементы вложенного массива в результат
            result.push(...newArray);
        } else {
            // Если текущий элемент не массив, просто добавляем его в результат
            result.push(arr[i]);
        }
    }

    // Возвращаем плоский массив
    return result;
}

console.log(flatten([1, [2, 3], [4, [5, 6]]]));
