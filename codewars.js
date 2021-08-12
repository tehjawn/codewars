// GET DIGITAL ROOT
// function digital_root(n) {
//     var digitSum = 0
//     n.toString().split('').forEach(c => {
//         digitSum += c - '0'
//     })
//     if (digitSum > 9) return digital_root(digitSum)
//     return digitSum
// }

// console.log(digital_root(789412))

// GET ALPHABET POSITION
// function alphabetPosition(text) {
//     return text.replace(/[^A-Za-z]/g, '').split('').map(c => c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1).reduce((ret, c) => `${ret} ${c}`)
//   }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// FIND NEXT SQUARE
// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     if (Number.isInteger(Math.sqrt(sq))) {
//         return (Math.sqrt(sq) + 1) ** 2
//     }
//     return -1;
// }

// console.log(findNextSquare(121))

// TRANSLATE TO PIG LATIN
// function pigIt(str) {
//     return str.split(' ').map(word => {
//         if (!word.match(/^[A-Za-z]+$/)) return word
//         if (word.length > 1) return word.substring(1) + word[0] + 'ay'
//         return word + 'ay'
//     }).join(' ').trimEnd()
// }

// console.log(pigIt('Pigs say oink oink !'))

// CONVERT DIGITS TO PHONE NUMBER FORMAT
// function createPhoneNumber(numbers) {
//     var n = numbers
//     return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
// }

// console.log(createPhoneNumber[1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// IS NUMBER PRIME?
function isPrime(num) {
    for (var i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
        if (num % i == 0) return false
    }
    return num > 1;
}

console.log(isPrime(23))
console.log(isPrime(4))