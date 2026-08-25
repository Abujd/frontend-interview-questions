import { Node } from "../BinaryTree/treeTraversal.js";
var zigzagLevelOrder = function (root) {
    if (root === null) return [];

    let queue = [root], orderCount = 0, res = [];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let level = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        if (orderCount % 2 === 0)
            res.push(level);
        else {
            level.reverse();
            res.push(level)
        }
        orderCount++;
    }
    return res;
};


let rootNode = new Node(1);

rootNode.left = new Node(2);
rootNode.right = new Node(21);

rootNode.left.left = new Node(3);
rootNode.left.right = new Node(13);

rootNode.left.left.left = new Node(4);
rootNode.left.left.right = new Node(41);

console.log(zigzagLevelOrder(rootNode));
