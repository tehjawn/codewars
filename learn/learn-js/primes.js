/**
 * Prime Numbers from 2 to n
 * 
 * - A prime number is any number that can only be divided
 *   by itself and 1
 * 
 */

let getPrimesMToN = (n, m) => {
    if (n > m) return 'Error: n cannot be bigger than m'

    if (m <= 1) return ''

    let retString = []
    for (let i = n; i <= m; i++) {
        if (isPrime(i)) {
            retString.push(i)
        }
    }

    return retString.join(',')
}

let getPrimesToN = (m) => {
    return getPrimesMToN(2, m)
}

let isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

console.log(getPrimesMToN(5, 11))

module.exports = {getPrimesToN, getPrimesMToN};

/**
 * 
 * 1234 => 1+2 = 3, 2+3 = 5, 3+4 = 7
 * 1432 => 1+4 = 5, 4+3 = 7, 3+2 = 5
 * 
 */