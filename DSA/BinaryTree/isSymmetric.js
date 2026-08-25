import { Node } from "../BinaryTree/treeTraversal.js";

var isSymmetric = function (root) {
    if (root === null) return true;

    const isMirror = function (p, q) {
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;

        if (p.val !== q.val) return false;

        return (isMirror(p.left, q.right) && isMirror(p.right, q.left));
    }
    return isMirror(root.left, root.right)
};


let rootNode = new Node(1);

rootNode.left = new Node(2);

rootNode.right = new Node(2);

rootNode.left.right = new Node(3);

rootNode.right.right = new Node(3);
console.log(isSymmetric(rootNode));