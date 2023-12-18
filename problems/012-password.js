/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */

function validatePassword(password) {
    //Проверяем на кол-во символов в пароле, если меньше 7 возвращаем false
    if (password.length < 7) {
        return false;
    }

    // Проверяем, содержит ли пароль хотя бы одну строчную букву.
    let hasLowerCase = /[a-z]/.test(password);

    // Проверяем, содержит ли пароль хотя бы одну заглавную букву.
    let hasUpperCase = /[A-Z]/.test(password);

    // Проверяем, содержит ли пароль хотя бы одну цифру.
    let hasDigit = /\d/.test(password);

    return hasLowerCase && hasUpperCase && hasDigit;
}

module.exports = validatePassword;
