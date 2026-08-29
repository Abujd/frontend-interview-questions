// Count the nodes in a Complete Binary Tree
// If the height of the left subtree and right subtree is equal,
// the tree is complete, so we can use the formula: 2^h - 1.

// Approach:
// 1. Calculate the height of the left subtree.
// 2. Calculate the height of the right subtree.
// 3. If both heights are equal, use the formula: 2^h - 1.
// 4. Otherwise, recursively count the nodes in the left and right subtrees.



import { Node } from "../BinaryTree/treeTraversal.js";

var countNodes = function (root) {
    if (root === null) return 0;

    const lHeight = getLeftHeight(root);
    const rHeight = getRightHeight(root);
    if (lHeight === rHeight) return Math.pow(2, lHeight + 1) - 1;

    else return countNodes(root.left) + countNodes(root.right) + 1;
};

var getLeftHeight = function (root) {
    let count = 0;
    while (root.left) {
        count++;
        root = root.left;
    }
    return count;
}

var getRightHeight = function (root) {
    let count = 0;
    while (root.right) {
        count++;
        root = root.right;
    }
    return count;
}


let rootNode = new Node(1);

rootNode.left = new Node(2);

rootNode.right = new Node(3);

rootNode.left.left = new Node(4);

rootNode.left.right = new Node(5);

rootNode.right.left = new Node(6);

console.log(countNodes(rootNode));