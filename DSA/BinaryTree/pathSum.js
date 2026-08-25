
import { Node } from "../BinaryTree/treeTraversal.js";


var maxPathSum = function (root) {
    let maxSum = -Infinity;
    var helper = function (root) {
        if (root === null) return 0;
        let left = Math.max(0, helper(root.left));
        let rigth = Math.max(0, helper(root.right));

        maxSum = Math.max(maxSum, left + rigth + root.val);

        return root.val + Math.max(left, rigth);
    }
    helper(root);
    return maxSum;
};

let rootNode = new Node(-10);

rootNode.left = new Node(9);
rootNode.right = new Node(20);

rootNode.right.left = new Node(15);
rootNode.right.right = new Node(7);

console.log(maxPathSum(rootNode));
