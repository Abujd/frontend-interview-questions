
// Algorithm:
// Preorder  → Root → Left → Right
// Inorder   → Left → Root → Right

// 1. Take the first element from Preorder.
//    This element is always the root of the tree.

// 2. Find the index of this root element in Inorder.

// 3. Elements to the left of the root in Inorder
//    belong to the left subtree.

// 4. Elements to the right of the root in Inorder
//    belong to the right subtree.

// 5. Repeat the same process recursively for the
//    left and right subtrees.

// 6. Continue until all elements from Preorder are processed.
import { Node } from "../BinaryTree/treeTraversal.js";

var buildTree = function (preorder, inorder, i) {

    let preIndex = 0;

    function build(start, end) {
        if (start > end) return null;
        let rootValue = preorder[preIndex++];
        let root = new Node(rootValue);

        let rootIndex = inorder.indexOf(rootValue);

        root.left = build(start, rootIndex - 1);
        root.right = build(rootIndex + 1, end);

        return root;
    }

    return build(0, inorder.length - 1);


};

let preorder = [3, 9, 20, 15, 7];

let inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder, 0));