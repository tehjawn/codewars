/**
 * Adds spaces between words that are in camelCase.
 * ex: camelCase -> camel Case
 * @param {*} string 
 * @returns 
 */

function solution(string) {
    return string.split('').map(c => {
        if (c.charCodeAt(0) < 'a'.charCodeAt(0)) {
            return ' ' + c
        } else {
            return c
        }
    }).join('')
}