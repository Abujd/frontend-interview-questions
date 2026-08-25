import { Node } from "../BinaryTree/treeTraversal.js";
var diameterOfBinaryTree = function (root) {

    let diameter = 0;

    var getHeight = function (root) {

        if (root === null) return 0;

        let leftH = getHeight(root.left);
        let rightH = getHeight(root.right);

        diameter = Math.max(diameter, leftH + rightH);

        return 1 + Math.max(leftH, rightH);
    };

    getHeight(root);

    return diameter;
};
let rootNode = new Node(1);

rootNode.left = new Node(2);
// rootNode.right = new Node(3);

// rootNode.left.left = new Node(4);
// rootNode.left.right = new Node(5);

console.log(diameterOfBinaryTree(rootNode));
