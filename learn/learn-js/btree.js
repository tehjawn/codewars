/**
 * Binary Trees
 * ============
 * - A tree where each node has 0-2 children nodes.
 * - The connection between nodes are called the edges.
 * - The topmost node is called the "root".
 * - A node without children is called a "leaf" or "terminal" node.
 * - The "Height" of the tree is the number of edges from the farthest leaf to the root.
 * - The "Depth" or "Level" of a node is the distance between the root and the target node.
 * 
 *   btree =
 *            1
 *            /\
 *           2  3
 *              /\
 *             4  5
 * 
 * - A "Full" binary tree is a tree where each node has either 0 or 2 children, but never only 1.
 * - A "Complete" binary tree is a tree where all levels except for the last level are filled with nodes.
 * - A "Perfect" binary when all levels are full of nodes.
 * 
 *   full_btree =
 *            1
 *            /\
 *           2  3
 *              /\
 *             4  5
 * 
 *   complete_btree =
 *            1
 *            /\
 *           2  3
 *          /\   
 *         4  5 
 * 
 *   perfect_btree =
 *            1
 *            /\
 *           2  3
 *          /\   /\
 *         4  5 6  7
 * 
 *   Note: "Perfect" btrees have (2^k)-1 nodes where k is the last level of the tree.
 * 
 */

// Tree Traversal
const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
    this.parent = null;
  }

  get left() {
    return this.descendants[LEFT];
  }

  set left(node) {
    this.descendants[LEFT] = node;
    if (node) {
      node.parent = this;
    }
  }

  get right() {
    return this.descendants[RIGHT];
  }

  set right(node) {
    this.descendants[RIGHT] = node;
    if (node) {
      node.parent = this;
    }
  }
}



// ======================================== //


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