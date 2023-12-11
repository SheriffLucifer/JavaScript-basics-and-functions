/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */

function sortTimestamps(list) {
    list.sort((time1, time2) => {
        const [h1, m1, s1] = time1.split(":").map(Number);
        const [h2, m2, s2] = time2.split(":").map(Number);

        // Сравниваем по часам, затем по минутам, затем по секундам
        if (h1 !== h2) {
            return h1 - h2;
        } else if (m1 !== m2) {
            return m1 - m2;
        } else {
            return s1 - s2;
        }
    });

    return list;
}

module.exports = sortTimestamps;
