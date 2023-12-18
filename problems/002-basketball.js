/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */

function getWinner(points) {
    let firstTeamPoints = 0;
    let secondTeamPoints = 0;

    for (let i = 0; i < points.length; i++) {
        const [scoreTeam1, scoreTeam2] = points[i].split("-");

        firstTeamPoints += parseInt(scoreTeam1, 10);
        secondTeamPoints += parseInt(scoreTeam2, 10);
    }

    if (firstTeamPoints > secondTeamPoints) {
        return 1;
    } else if (firstTeamPoints < secondTeamPoints) {
        return 2;
    } else {
        return undefined;
    }
}

module.exports = getWinner;
