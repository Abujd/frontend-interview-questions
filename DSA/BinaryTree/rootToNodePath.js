import { Node } from "../BinaryTree/treeTraversal.js";

var rootToNodePath = function (root, target) {
    let ans = [];
    if (root === null) return false;

    const getPath = function (node) {
        if (node === null) return false;

        ans.push(node.val);
        if (node.val === target) return true;

        if (getPath(node.left) || getPath(node.right)) { return true; }

        ans.pop();
        return false;
    }

    getPath(root);
    return ans;

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

console.log(rootToNodePath(rootNode, 5));