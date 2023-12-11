/**
 * Функция, которая принимает на вход объект и возвращает его строковое представление в формате "key1=value1&key2=value2&...".
 * @param {object} obj - входной объект
 * @return {string} - строковое представление объекта
 */

function objectToString(obj) {
    const keyValuePairs = [];

    // Перебираем свойства объекта
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Кодируем ключ и значение и добавляем их в массив
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(obj[key]);
            keyValuePairs.push(`${encodedKey}=${encodedValue}`);
        }
    }

    // Соединяем массив в строку, используя символ "&"
    const queryString = keyValuePairs.join("&");

    return queryString;
}

// Примеры:
console.log(objectToString({ a: 1, b: 2, c: 3 })); // "a=1&b=2&c=3"
console.log(objectToString({ foo: "hello", bar: "world" })); // "foo=hello&bar=world"
console.log(objectToString({ x: true, y: false })); // "x=true&y=false"
