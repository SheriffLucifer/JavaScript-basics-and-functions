/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */

function census(list) {
    // Инициализируем переменные для хранения максимального возраста и соответствующего индекса.
    let maxAge = -1;
    let maxAgeIndex = undefined;

    for (let i = 0; i < list.length; i++) {
        // Получаем текущего человека из массива.
        const person = list[i];

        // Проверяем, является ли человек мужчиной и имеет ли возраст больший чем текущий максимальный возраст.
        if (person.gender === "Male" && person.age > maxAge) {
            // Если условие выполняется, обновляем значения максимального возраста и индекса.
            maxAge = person.age;
            // Увеличиваем индекс на 1, так как индексы массива начинаются с 0, а возвращаемый результат ожидается в естественной нумерации (1, 2, 3, ...).
            maxAgeIndex = i + 1;
        }
    }

    return maxAgeIndex;
}

module.exports = census;
