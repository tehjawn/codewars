/**
 * For a given number n, returns the digital sum.
 * A digital sum is the sum of all of a number's digits, calculated recursively until only one digit remains.
 * Example for n = 78: 78 => 7+8 = 15 => 1+5 = 6 => returns 6
 * @param {number} n 
 * @returns {number}
 */
const digital_root = (n) => {
  var digitSum = 0
  n.toString().split('').forEach(c => {
    digitSum += c - '0'
  })
  if (digitSum > 9) return digital_root(digitSum)
  return digitSum
}

console.log(digital_root(789412))

export default {
  digital_root
}