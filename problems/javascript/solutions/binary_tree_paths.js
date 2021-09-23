/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
    let visited = new Set();
    let stack = []; // Stack
    let leafPaths = []; // Paths to Leaf Node

    visited.add(root);
    stack.push(root);

    while (stack.length > 0) {
        let currentNode = stack.pop();

        stack.push(currentNode);

        if (currentNode.left == null && currentNode.right == null) {
            leafPaths.push(stack);
        }

        if (currentNode.left && visited.has(currentNode.left)) {
            visited.add(currentNode.left);
            stack.push(currentNode.left);
        }

        if (currentNode.right && visited.has(currentNode.right)) {
            visited.add(currentNode.right);
            stack.push(currentNode.right);
        }
    }

    return leafPaths.map(path => {
        path.join('->');
    })
};

binaryTreePaths(new TreeNode(
    1,
    new TreeNode(
        2,
        null,
        new TreeNode(
            5
        )
    ),
    new TreeNode(
        3
    )
))