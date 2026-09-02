import { TreeNode } from "./BST.js";

var maxSumBST = function (root) {

};


// Input: root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]

let root = new TreeNode(1);

root.left = new TreeNode(4);
root.right = new TreeNode(3);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

root.right.left = new TreeNode(2);
root.right.right = new TreeNode(5);

root.right.right.left = new TreeNode(4);
root.right.right.right = new TreeNode(6);

console.log(maxSumBST(root));