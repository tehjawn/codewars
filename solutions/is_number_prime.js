// IS NUMBER PRIME?
function isPrime(num) {
    // Loop through potential factors of target number from 2 - sqrt(num)
    // sqrt(num) is the highest potential factor of num with a complement that is less than or equal to sqrt(num)
    for (var i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
        // If the target number modulus the current i == 0, return false as it has successfully been factored evenly
        if (num % i == 0) return false
    }
    // if no numbers that factor evenly into the target num is found,
    // return true if num is greater than 1; else false
    return num > 1;
}

console.log(isPrime(23))
console.log(isPrime(4))