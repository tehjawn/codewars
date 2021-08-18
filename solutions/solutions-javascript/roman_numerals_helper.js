/**
 * Roman Numeral Helper Class
 * - RomanNumerals.toRomanMap(number) => Translates number to roman numerals.
 * - RomanNumerals.fromRomanMap(number) => Translates roman numerals to number.
 */
const RomanNumerals = {
    toRomanMap: [
        { number: 1000, numeral: 'M' },
        { number: 900, numeral: 'CM' },
        { number: 500, numeral: 'D' },
        { number: 400, numeral: 'CD' },
        { number: 100, numeral: 'C' },
        { number: 90, numeral: 'XC' },
        { number: 50, numeral: 'L' },
        { number: 40, numeral: 'XL' },
        { number: 10, numeral: 'X' },
        { number: 9, numeral: 'IX' },
        { number: 5, numeral: 'V' },
        { number: 4, numeral: 'IV' },
        { number: 1, numeral: 'I' },
    ],
    toRoman: (n) => {
        let roman = ""
        RomanNumerals.toRomanMap.forEach(definition => {
            let count = Math.floor(n / definition.number) // Get # of Numeral
            for (let i = 0; i < count; i++) {
                roman += definition.numeral // Add # of Numeral
                n -= definition.number // Subtract Numeral value from n
            }
        })
        return roman
    },
    fromRomanMap: {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    },
    fromRoman: (r) => {
        let lastRomanValue = 1000
        let number = 0
        r.split('').forEach(r => {
            var currentRomanValue = RomanNumerals.fromRomanMap[r]
            if (currentRomanValue > lastRomanValue) {
                number -= lastRomanValue // Remove previous value
                number += currentRomanValue - lastRomanValue // Add current value - 1
            } else {
                number += currentRomanValue // Add current value
            }
            lastRomanValue = currentRomanValue // Set last value to current value
        })
        return number
    }
}

console.log(RomanNumerals.toRoman("4"))
console.log(RomanNumerals.fromRoman("IV"))