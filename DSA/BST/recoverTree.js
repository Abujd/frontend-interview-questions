import { TreeNode } from "./index.js";

var recoverTree = function (root) {
    let first = last = middle = null;
    let prev = new TreeNode(-Infinity);
    function inorder(root) {
        if (root === null) return;
        inorder(root.left);
        if (prev !== null && root.val < prev.val) {

            if (first === null) {
                first = prev;
                middle = root;
            } else {
                last = root;
            }
        }
        prev = root;
        inorder(root.right);

    }
    inorder(root);

    if (first !== null && last !== null) {
        let t = first.val;
        first.val = last.val;
        last.val = t;
    } else if (first !== null && middle !== null) {
        let t = first.val;
        first.val = middle.val;
        middle.val = t;
    }
};


// Create broken BST
// Input: root = [3,1,4,null,null,2]

let root = new TreeNode(3);

root.left = new TreeNode(1);

root.right = new TreeNode(4);
root.right.left = new TreeNode(2);

recoverTree(root);