// WIP

// function hamming(n) {
//     // 2 ** i
//     // 3 ** j
//     // 5 ** k

//     // 0 <= i,j,k

//     // 2**i * 3**j * 5**k = n

//     // Usually for these types of problems, you want to knock out the biggest factors first
//     // then work down

//     //   k = log5(n)
//     //   j = log3(n)
//     //   i = log2(n)
//     // Where n is reduced each time
//     // But in this case it's a bit different, we're trying to get the lowest factors
//     // that multiply with each other to become the product

//     // Let's just try it biggest to smallest first just to see what happens
//     // let hammingNumber = (2 ** i) * (3 ** j) * (5 ** k)

//     let iCount = 0, jCount = 0, kCount = 0
//     let nCopy = n
//     for (var k = 5; k <= nCopy; k *= 5) {
//         nCopy = ~~(nCopy/nCopy%5)
//         kCount += 1
//     }
//     console.log(`nCopy: ${nCopy}, k: ${kCount}`)
//     for (var j = 3; j <= ~~nCopy; j *= 3) {
//         nCopy = ~~(nCopy/nCopy%3)
//         jCount += 1
//     }
//     console.log(`nCopy: ${nCopy}, j: ${jCount}`)
//     for (var i = 2; i <= ~~nCopy; i *= 2) {
//         nCopy = ~~(nCopy/nCopy%2)
//         iCount += 1
//     }
//     console.log(`nCopy: ${nCopy}, i: ${iCount}`)

//     return (2 ** iCount) * (3 ** jCount) * (5 ** kCount)
// }

// // console.log(hamming(1))
// // console.log(hamming(10))
// console.log(hamming(9))