/**
 * For a given array, find the highest sum of its contiguous subarrays.
 * @param {*} arr 
 */
// MAXIMUM SUBARRAY SUM
var maxSequence = function (arr) {
    var currentMax = 0
    var highestMax = 0
    arr.forEach(i => {
        currentMax += i
        if (currentMax > highestMax) highestMax = currentMax
        if (currentMax < 0) currentMax = 0
    })
    return highestMax
}