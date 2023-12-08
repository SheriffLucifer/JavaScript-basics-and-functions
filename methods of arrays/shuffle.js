/**
 Задача "Shuffle". Напишите функцию shuffle(arr), которая принимает массив и перемешивает его элементы в случайном
 порядке. Функция должна изменять исходный массив, а не возвращать новый. Например, shuffle([1, 2, 3, 4, 5]) может
 вернуть [3, 1, 5, 4, 2].
 * */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Генерируем случайный индекс от 0 до i
        let randomIndex = Math.floor(Math.random() * (i + 1));

        // Меняем местами текущий элемент с элементом, выбранным случайным образом
        let temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));
