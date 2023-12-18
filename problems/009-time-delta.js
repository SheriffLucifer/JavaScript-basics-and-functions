/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    // Разбиваем строки времени на массивы [часы, минуты, секунды] и преобразуем каждый элемент в число.
    const [hoursX, minutesX, secondsX] = x.split(":").map(Number);
    const [hoursY, minutesY, secondsY] = y.split(":").map(Number);

    // Вычисляем разницу в часах, минутах и секундах между временами x и y.
    const deltaHours = hoursY - hoursX;
    const deltaMinutes = minutesY - minutesX;
    const deltaSeconds = secondsY - secondsX;

    // Вычисляем общее количество секунд, учитывая разницу в часах, минутах и секундах.
    const totalSeconds = deltaHours * 3600 + deltaMinutes * 60 + deltaSeconds;

    return totalSeconds;
}

module.exports = getTimeDelta;
