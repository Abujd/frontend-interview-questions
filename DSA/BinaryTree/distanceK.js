import { Node } from "../BinaryTree/treeTraversal.js";

var distanceK = function (root, target, k) {
    let map = new Map();
    var getDistanceFromRoot = function (root) {
        let queue = [[root, 0, 0]];

        while (queue.length > 0) {
            let [temp, d, side] = queue.shift();
            map.set(temp.val, [d, side]);

            if (temp.left) queue.push([temp.left, d + 1, 1]);
            if (temp.right) queue.push([temp.right, d + 1, 2]);
        }
        console.log(map);

    }

    getDistanceFromRoot(root);

    let targetDistance = map.get(target)[0];
    let res = [...map.entries()]
        .filter(([node, [d, side]]) => {
            if (side === 1) {
                return d - targetDistance === k;
            }

            if (side === 2) {
                return d + targetDistance === k;
            }

            return false;
        })
        .map(([node]) => node);

    console.log("res =", res);

};


let rootNode = new Node(3);

rootNode.left = new Node(5);

rootNode.right = new Node(1);

rootNode.left.left = new Node(6);

rootNode.left.right = new Node(2);

rootNode.right.left = new Node(0);

rootNode.right.right = new Node(8);

rootNode.left.right.left = new Node(7);

rootNode.left.right.right = new Node(4);

console.log(distanceK(rootNode, 5, 2));