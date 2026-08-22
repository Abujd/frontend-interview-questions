import { Node } from "../BinaryTree/treeTraversal";

var maxDepth = function (root) {
    if (root === null) return 0;

    let leftHeigth = maxDepth(root.left);
    let rightHeigth = maxDepth(root.right);
    return 1 + Math.max(leftHeigth, rightHeigth);

};




let rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
rootNode.right.right = new Node(7);
console.log(maxDepth(rootNode));

