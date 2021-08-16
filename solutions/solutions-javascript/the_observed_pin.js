// Get Hypothetical Pincode Observed
function getPINs(observed) {
    console.log("Getting Potential PIN Combos for: " + observed)
    let possibleNumbersMap = {
        1: [1, 2, 4],
        2: [1, 2, 3, 5],
        3: [2, 3, 6],
        4: [1, 4, 5, 7],
        5: [2, 4, 5, 6, 8],
        6: [3, 5, 6, 9],
        7: [4, 7, 8],
        8: [5, 7, 8, 9, 0],
        9: [6, 8, 9],
        0: [8, 0]
    }, permutations = []

    return cartesian(...observed.split("").map(pinCode => possibleNumbersMap[pinCode]))
}

// Cartesian Function - return all combinations of an arbitrary number of array inputs
let cartesian = (...possiblePINs) => {
    var combinations = [], maxPINCodeLength = possiblePINs.length - 1;
    let helper = (arr, pinIndex) => {
        for (var j = 0, l = possiblePINs[pinIndex].length; j < l; j++) {
            var copy = arr.slice(0);
            copy.push(possiblePINs[pinIndex][j]);
            if (pinIndex == maxPINCodeLength)
                combinations.push(copy.join(''));
            else
                helper(copy, pinIndex + 1);
        }
    }
    helper([], 0);
    return combinations;
}

// console.log(getPINs("1"))
console.log(getPINs("12"))

// getPINs("1")
// getPINs("12")