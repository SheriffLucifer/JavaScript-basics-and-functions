/**
 * Функция, которая принимает на вход объект и возвращает название свойства с наименьшим значением.
 * @param {object} obj - входной объект
 * @return {string} - название свойства с наименьшим значением
 */

function findMinProp(obj) {
    // Инициализация переменных для хранения имени свойства и минимального значения
    let minProp = null;
    // Используем бесконечность в качестве начального значения, которое будет меньше любого числового свойства объекта.
    let minValue = Infinity;

    for (const prop in obj) {
        // Проверка, является ли свойство собственным свойством объекта и числовым
        if (obj.hasOwnProperty(prop) && typeof obj[prop] === "number") {
            // Сравнение текущего числового значения со значением minValue
            if (obj[prop] < minValue) {
                // Если текущее значение меньше, обновляем minProp и minValue
                minProp = prop;
                minValue = obj[prop];
            }
        }
    }

    return minProp;
}

// Примеры:
console.log(findMinProp({ a: 2, b: 5, c: 1 })); // 'c'
console.log(findMinProp({ x: 10, y: -5, z: 0 })); // 'y'
console.log(findMinProp({ foo: 100, bar: 200, baz: 50 })); // 'baz'
