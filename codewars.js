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
// function isPrime(num) {
//     for (var i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
//         if (num % i == 0) return false
//     }
//     return num > 1;
// }

// console.log(isPrime(23))
// console.log(isPrime(4))

// MAXIMUM SUBARRAY SUM
// var maxSequence = function (arr) {
//     var currentMax = 0
//     var highestMax = 0
//     arr.forEach(i => {
//         currentMax += i
//         if (currentMax > highestMax) highestMax = currentMax
//         if (currentMax < 0) currentMax = 0
//     })
//     return highestMax
// }

// console.log(maxSequence([1, 2, 3]))

// EXTRACT RANGE
// function extractRanges(list) {
//     if (list.length >= 3) {
//         // Get Ranges
//         var ranges = getRanges(list)

//         // Format Return String
//         return ranges.join(',')
//     }

//     return list.join(',')
// }

// const getRanges = (list) => {
//     var ranges = []         // Final Return list of Ranges
//     var currentRange = []   // Current Range to be pushed to the list of Ranges

//     // For each item in the list...
//     list.forEach(i => {
//         // While there's an item in the current range...
//         if (currentRange.length > 0) {
//             // If the current item is one greater than the last item in the current range...
//             if (i == currentRange[currentRange.length-1] + 1) {
//                 // Add this item to the current range!
//                 currentRange.push(i)
//             } else {
//                 // Otherwise, the item belongs to a new range.
//                 // Add the currentRange to the list of Ranges
//                 if (currentRange.length >= 3) {
//                     ranges.push(`${currentRange[0]}-${currentRange[currentRange.length-1]}`)
//                 } else {
//                     ranges.push(currentRange.join(','))
//                 }
//                 // Now that the last range was pushed to the list of ranges
//                 // We set up our new range with the current i
//                 currentRange = [i]
//             }
//         } else {
//             // Otherwise, push an item into the current range!
//             currentRange.push(i)
//         }
//     })

//     // Catch leftover currentRange
//     if (currentRange.length >= 3) {
//         ranges.push(`${currentRange[0]}-${currentRange[currentRange.length-1]}`)
//     } else {
//         ranges.push(currentRange.join(','))
//     }

//     return ranges
// }

// console.log(extractRanges([1, 2, 3]))
// console.log(extractRanges([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14]))