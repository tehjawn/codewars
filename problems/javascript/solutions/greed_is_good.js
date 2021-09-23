function score(dice) {
    // Fill me in!

    // 5 6-sided dice
    // [1,1,1] in dice = 1000
    // [6,6,6] in dice = 600
    // [5,5,5] in dice = 500
    // [4,4,4] in dice = 400
    // [3,3,3] in dice = 300
    // [2,2,2] in dice = 200
    // [1,x,x,x,x] in dice = 100
    // [5,x,x,x,x] in dice = 50

    // Get # of 1-6s Rolled
    // 2-6 % 3 == 0 => # * 100 points
    // 1 % 3 == 0 => 1k points
    // afterwards, count 1s and 5s and add 100/50 points respectively
    // return

    let diceMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, points = 0
    dice.forEach(die => {
        diceMap[die] += 1
        if (diceMap[die] % 3 == 0) {
            if (die > 1) {
                points += die * 100
            } else if (die == 1) {
                points += 1000
            }
            diceMap[die] = 0
        }
    })
    points += (diceMap[1] * 100) + (diceMap[5] * 50)
    return points
}

console.log(score([1,2,3,4,5]))
console.log(score([1,1,1,4,5]))
console.log(score([3,3,4,4,4]))
console.log(score([2,3,4,2,3]))