import { BST } from "./index.js";

var kthSmallest = function (root, k) {
    let counter = 0;
    let result = null;

    function inorder(root) {
        if (root === null) return;

        inorder(root.left);

        counter++;

        if (counter === k) {
            result = root.val;
            return;
        }

        inorder(root.right);
    }

    inorder(root);

    return result;
};

var kthLargest = function (root, k) {
    let totalNodes = 0;

    function countTotalNodes(node) {
        if (node === null) return;
        countTotalNodes(node.left);
        totalNodes++;
        countTotalNodes(node.right);
    }
    countTotalNodes(root);
    let res = null, c = 0;

    let target = totalNodes - k + 1;

    function inorder(node, k) {
        if (node === null) return;

        inorder(node.left);
        c++;

        if (c === target) {
            res = node.val;

            return;
        }
        inorder(node.right, k);
    }
    inorder(root, k);
    return res;


}

const tree = new BST();

let root = tree.addNode(3);

tree.addNode(1);
tree.addNode(4);
tree.addNode(2);

console.log(kthLargest(root, 1)); // 1
// console.log(kthSmallest(root, 2)); // 2
// console.log(kthSmallest(root, 3)); // 3
// console.log(kthSmallest(root, 4)); // 4