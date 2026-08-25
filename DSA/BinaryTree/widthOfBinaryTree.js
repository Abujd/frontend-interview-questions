import { Node } from "../BinaryTree/treeTraversal.js";

var widthOfBinaryTree = function (root) {
    if (root === null) return 0;

    let queue = [[root, 0]];
    let maxWidth = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;

        let firstIndex = queue[0][1];
        let lastIndex = queue[levelSize - 1][1];

        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);

        for (let i = 0; i < levelSize; i++) {
            let [node, index] = queue.shift();

            if (node.left) {
                queue.push([node.left, 2 * index]);
            }

            if (node.right) {
                queue.push([node.right, 2 * index + 1]);
            }
        }
    }

    return maxWidth;
};


let rootNode = new Node(1);

rootNode.left = new Node(3);
rootNode.right = new Node(2);

rootNode.left.left = new Node(5);
rootNode.right.right = new Node(9);

rootNode.left.left.left = new Node(6);
rootNode.right.right.left = new Node(7);

console.log(widthOfBinaryTree(rootNode));