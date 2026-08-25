
import { Node } from "../BinaryTree/treeTraversal.js";

var rightSideView = function (root) {
    if (root === null) return [];

    let queue = [[root, 0]];
    let nodes = new Map();

    while (queue.length > 0) {
        let [temp, x] = queue.shift();
        nodes.set(x, temp.val);

        if (temp.left) queue.push([temp.left, x + 1]);
        if (temp.right) queue.push([temp.right, x + 1]);

    }

    console.log(nodes);



    let sortedX = [...nodes.keys()].sort((a, b) => a - b);
    let ans = [];
    for (let index of sortedX) {
        ans.push(nodes.get(index))
    }
    return ans;

};


let rootNode = new Node(1);

rootNode.left = new Node(2);

rootNode.right = new Node(3);

rootNode.left.left = new Node(4);

rootNode.left.right = new Node(5);

rootNode.right.left = new Node(6);

rootNode.right.right = new Node(7);

console.log(rightSideView(rootNode));

