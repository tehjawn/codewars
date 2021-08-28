const {getPrimesToN, getPrimesMToN} = require('./p')

test('Returns primes from 2 to 11', () => {
    expect(getPrimesToN(11)).toBe('2,3,5,7,11')
})

test('Returns primes from 5 to 11', () => {
    expect(getPrimesMToN(5, 11)).toBe('5,7,11')
})