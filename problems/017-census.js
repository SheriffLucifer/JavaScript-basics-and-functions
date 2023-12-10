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
    let maxAge = -1;
    let maxAgeIndex = undefined;

    for (let i = 0; i < list.length; i++) {
        const person = list[i];

        if (person.gender === "Male" && person.age > maxAge) {
            maxAge = person.age;
            maxAgeIndex = i + 1;
        }
    }

    return maxAgeIndex;
}

module.exports = census;
