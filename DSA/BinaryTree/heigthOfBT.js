import { Node } from "../BinaryTree/treeTraversal.js";

var getHeight = function (root) {
    if (root === null) return 0;

    let leftHeigth = getHeight(root.left);
    let rightHeigth = getHeight(root.right);
    return 1 + Math.max(leftHeigth, rightHeigth);
};

var isBalanced = function (root) {
    if (root === null) return true;
    let leftH = getHeight(root.left);
    let rightH = getHeight(root.right);
    if (Math.abs(leftH - rightH) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
        return true;
    }
    return false;

}


let rootNode = new Node(1);

rootNode.left = new Node(2);
rootNode.right = new Node(2);

rootNode.left.left = new Node(3);
rootNode.left.right = new Node(3);

rootNode.left.left.left = new Node(4);
rootNode.left.left.right = new Node(4);

console.log(isBalanced(rootNode));
