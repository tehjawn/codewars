// Amazon Qs
// 1. Get the left-side view of a binary tree.
// 2. Get outline of a binary tree.

/**
 * btree=
 *          1
 *          /\
 *         2  3
 *            /\
 *           4  5
 * 
 * 1. getLeftmostNodes(btree)
 *      Returns
 *          1, 2, 4
 * 
 * 2. getOuterNodes(btree)
 *      Returns
 *          1, 2, 3, 4, 5
 * 
 */

/**
 * 
 *          1           <-- Level 1 ==> Leftmost: 1, Outer: 1
 *          /\  
 *         2  3         <-- Level 2 ==> Leftmost: 2, Outer: 2, 3
 *            /\
 *           4  5       <-- Level 3 ==> Leftmost: 4, Outer: 4, 5
 * 
 */

// Class that defines a node within the tree.
class Node {
    constructor({ value = null, left = null, right = null }) {
        this.value = value
        this.left = left
        this.right = right
    }

    print() {
        console.log(this)
    }
}

// Build our test tree.
let btree =
    new Node({
        value: 1,
        left: new Node({ value: 2 }),
        right: new Node({
            value: 3,
            left: new Node({ value: 4 }),
            right: new Node({ value: 5 })
        })
    })

// Get the leftmost nodes of an input tree
let getLeftmostNodes = (btree) => {
    
    // Catch for null value tree!
    if (btree == null) return

    // For each level of the binary tree...
    let level = 0

    // Add the first element (from left -> right) that exists to the "leftmost" array.
    // Ignore the rest at this level.
    // Move onto the next level.

}

getLeftmostNodes(btree)