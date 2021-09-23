// 556. Next Greater Element III
// Great explanation: https://leetcode.com/problems/next-greater-element-iii/discuss/101824/Simple-Java-solution-(4ms)-with-explanation.
/**
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n 
and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit 
integer, return -1.

Example 1:
Input: n = 12
Output: 21

Example 2:
Input: n = 21
Output: -1
 
Constraints:
1 <= n <= (2^31 - 1)
 */

/**
 * @param {number} n
 * @return {number}
 */
 var nextGreaterElement = function(n) {
    let nStr = n.toString();

    let i, j;

    // Step 1. Start from the right-most digit and find the first digit that's smaller than the digit to its right.
    for (i = nStr.length; i > 0; i--) {
        if (nStr[i-1] < nStr[i])
            break;
    }

    // If no digit is found, that means the number is filled with descending characters only.
    if (i == 0)
        return -1;
    
    // Step 2. Find the smallest digit to the right side of nStr[i-1]
    let x = nStr[i-1], smallest = i;
    for (j = i+1; j < nStr.length; j++) {
        if (nStr[j] > x && nStr[j] <= nStr[smallest])
            smallest = j
    }

    // Step 3. Swap the two numbers above - nStr[i-1] and nStr[smallest]
    let temp = nStr[i-1];
    nStr[i-1] = smallest;
    nStr[smallest] = temp;

    // Step 4. Sort the digits after nStr[i-1] in ascending order
    nStr = nStr.substring(0, i-1) + nStr.substring(i-1, nStr.length).sort()
    let val = parseInt(nStr)
    let maxInt = (2 ** 31) - 1
    return (val <= maxInt) ? val : -1

    // WIP
    // TODO: Check
};