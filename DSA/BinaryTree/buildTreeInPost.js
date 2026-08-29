import { Node } from "../BinaryTree/treeTraversal.js";

// Approach:
// Postorder → Left → Right → Root
// Inorder   → Left → Root → Right

// 1. Take the last element of Postorder as the root.
// 2. Find the index of the root in Inorder.
// 3. Elements to the right of the root form the right subtree.
// 4. Elements to the left of the root form the left subtree.
// 5. Recursively repeat the same process for left and right subtrees.
// 6. Continue until all nodes are processed, then return the root.

var buildTree = function (postorder, inorder) {

    let postOrderIndex = postorder.length - 1;

    var build = function (start, end) {

        if (start > end) return null;

        let rootValue = postorder[postOrderIndex--];
        let root = new Node(rootValue);

        let rootIndex = inorder.indexOf(rootValue);
        root.right = build(rootIndex + 1, end);
        root.left = build(start, rootIndex - 1);


        return root;

    }
    return build(0, inorder.length - 1);

}


let postorder = [9, 15, 7, 20, 3];

let inorder = [9, 3, 15, 20, 7];

console.log(buildTree(postorder, inorder, 0));