/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */

function decrypt(secret) {
    let decryptedMessage = "";

    for (let i = 0; i < secret.length; i++) {
        // Проверяем, является ли текущий символ пробелом.
        if (secret[i] === " ") {
            // Если символ - пробел, добавляем пробел в расшифрованное сообщение и переходим к следующему символу.
            decryptedMessage += " ";
            continue;
        }

        // Получаем ASCII-код текущего символа и увеличиваем его на 1.
        let charCode = secret.charCodeAt(i) + 1;

        // Проверяем, превышает ли новый ASCII-код код символа 'z'.
        if (charCode > "z".charCodeAt(0)) {
            // Если превышает, выполняем циклическое смещение на 26 символов назад.
            charCode -= 26;
        }

        // Преобразуем новый ASCII-код в символ и добавляем его в расшифрованное сообщение.
        let decryptedChar = String.fromCharCode(charCode);

        decryptedMessage += decryptedChar;
    }

    return decryptedMessage;
}

module.exports = decrypt;
