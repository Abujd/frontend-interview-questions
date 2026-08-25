import { Node } from "../BinaryTree/treeTraversal.js";
var verticalTraversal = function (root) {
    let nodes = new Map();
    let queue = [];

    queue.push([root, 0, 0]);

    while (queue.length > 0) {
        let [temp, x, y] = queue.shift();

        if (!nodes.has(x)) nodes.set(x, new Map());
        if (!nodes.get(x).has(y)) nodes.get(x).set(y, []);
        nodes.get(x).get(y).push(temp.val);

        if (temp.left) queue.push([temp.left, x - 1, y + 1]);
        if (temp.right) queue.push([temp.right, x + 1, y + 1]);
    }

    let ans = [];
    let sortedX = [...nodes.keys()].sort((a, b) => a - b)
    for (let x of sortedX) {
        let col = [];
        let sortedY = [...nodes.get(x).keys()].sort((a, b) => a - b);
        for (let y of sortedY) {
            col.push(...nodes.get(x).get(y).sort((a, b) => a - b));
        }
        ans.push(col);
    }
    return ans;
};


let rootNode = new Node(1);

rootNode.left = new Node(2);
rootNode.right = new Node(21);

rootNode.left.left = new Node(3);
rootNode.left.right = new Node(13);

rootNode.right.left = new Node(38);
rootNode.right.right = new Node(183);

rootNode.right.left.left = new Node(0);
rootNode.right.left.right = new Node(8);

rootNode.left.left.left = new Node(4);
rootNode.left.left.right = new Node(41);

console.log(verticalTraversal(rootNode));