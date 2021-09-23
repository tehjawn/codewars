function zeros(n) {
    // 10 * 1 = 10 = 5 * 2
    // 10 * 10 = 100 = 5 * 5 * 2 * 2
    // 10 * 100 = 1000 = 5 * 2 * 5 * 5 * 2 * 2

    // Because we know that # of 5 * 2 pairs dictates # of zeroes...
    // We must find # of 5 * 2 pairs in n!.

    // n = 5 => _5_ * 4 * 3 * _2_ *1 => 120 => 1 zero (1 5 * 2 pair)
    // n = 10 => _10_ * ... * _5_ * ... * _2_ * 1 => 3628800 => 2 zeroes (2 5 *2 pairs)
    // n = 30 => _30_ * .._25_ * .._20_ * .._15_ * .._10_ * .._5_ * .._2_ * 1 
    // 6 * 5, 5 * _5_, 5 * 4, 5 * 3, 5 * 2, 5 * 1
    // => 7 zeroes, because 25 contains two fives, one of which is mapped to another x2

    // Because factors of 5 < factors of 2...
    // We can say that for every factor of 5, there will always be a matching 2
    // So, now we will look for all factors of 5 instead of 5 * 2 pairs

    let zeroCount = 0

    // While multiple of 5 is less than the number...
    // For each multiple of 5 leading up to the number...
    for (let multipleOf5 = 5; multipleOf5 <= n; multipleOf5 *= 5) {
        // Add zeroes based on how many times that multiple of 5 factors into the total number

        /**
        * ex1: 5 => 1
        * 5/5 = 1
        */

        /**
        * ex2: 25 => 6
        * 25/5 => 5
        * 25/25 => 1
        */

        /**
        * ex3: 125 => 31
        * 125/5 = 25
        * 125/25 = 5
        * 125/125 = 1
        */

        zeroCount += Math.floor(n / multipleOf5)
    }
    return zeroCount
}

console.log(zeros(1))
console.log(zeros(5))
console.log(zeros(10))
console.log(zeros(30))