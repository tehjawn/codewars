/**
 * Memoization in JavaScript seeks to eliminate redundant calculations in recursive functions.
 */

// Fibonacci Before Memoization
function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci.print = (n,memo) => console.log(`Fibonacci Sequence for ${n} is \x1b[36m${fibonacci(n,memo)}\x1b[0m`)

// Fibonacci After Memoization
function fibonacciMemoized(n,memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo)
}

fibonacciMemoized.print = (n,memo) => console.log(`Fibonacci Sequence for ${n} is \x1b[36m${fibonacciMemoized(n,memo)}\x1b[0m`)

// Let's test run times...
console.time('fibonacci')
fibonacci.print(10)
console.timeEnd('fibonacci') // 0.10ms

console.time('fibonacciMemoized')
fibonacciMemoized.print(10)
console.timeEnd('fibonacciMemoized') // 0.04ms (2.5x Faster!)

console.time('fibonacci')
fibonacci.print(40)
console.timeEnd('fibonacci') // 1.3ms

console.time('fibonacciMemoized')
fibonacciMemoized.print(40)
console.timeEnd('fibonacciMemoized') // 0.025ms (5.2x Faster!)

// fibonacci.print(50) and over timed out...

console.time('fibonacciMemoized')
fibonacciMemoized.print(1000)
console.timeEnd('fibonacciMemoized') // 0.25ms (Actually can run!)