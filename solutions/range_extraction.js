function solution(list) {
    if (list.length >= 3) {
        // Get Ranges
        var ranges = getRanges(list)

        // Format Return String
        return ranges.join(',')
    }

    return list.join(',')
}

const getRanges = (list) => {
    var ranges = []         // Final Return list of Ranges
    var currentRange = []   // Current Range to be pushed to the list of Ranges

    // For each item in the list...
    list.forEach(i => {
        // While there's an item in the current range...
        if (currentRange.length > 0) {
            // If the current item is one greater than the last item in the current range...
            if (i == currentRange[currentRange.length-1] + 1) {
                // Add this item to the current range!
                currentRange.push(i)
            } else {
                // Otherwise, the item belongs to a new range.
                // Add the currentRange to the list of Ranges
                if (currentRange.length >= 3) {
                    ranges.push(`${currentRange[0]}-${currentRange[currentRange.length-1]}`)
                } else {
                    ranges.push(currentRange.join(','))
                }
                // Now that the last range was pushed to the list of ranges
                // We set up our new range with the current i
                currentRange = [i]
            }
        } else {
            // Otherwise, push an item into the current range!
            currentRange.push(i)
        }
    })

    // Catch leftover currentRange
    if (currentRange.length >= 3) {
        ranges.push(`${currentRange[0]}-${currentRange[currentRange.length-1]}`)
    } else {
        ranges.push(currentRange.join(','))
    }

    return ranges
}

console.log(solution([1, 2, 3]))
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14]))