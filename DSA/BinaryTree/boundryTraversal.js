import { Node } from "../BinaryTree/treeTraversal.js";

var boundryTraversal = function (root) {
    let res = [];
    if (!isLeaf(root)) res.push(root.val);
    leftBoundry(root)
    addLeafNode(root);
    rightBoundry(root);

    function leftBoundry(root) {
        let curr = root.left;
        while (curr) {
            if (!isLeaf(curr)) {
                res.push(curr.val);
            }
            if (curr.left) curr = curr.left
            else curr = curr.right
        }
        console.log(res);

    }
    function addLeafNode(root) {
        if (isLeaf(root)) {
            res.push(root.val);
            return;
        }
        if (root.left) addLeafNode(root.left);
        if (root.right) addLeafNode(root.right)

    }

    function rightBoundry(root) {
        let temp = [];
        let curr = root.right;
        while (curr) {
            if (!isLeaf(curr)) temp.push(curr.val);

            if (curr.right) curr = curr.right;
            else curr = curr.left;
        }
        temp.reverse();
        console.log(temp);

        res = [...res, ...temp];
    }

    function isLeaf(root) {
        return root.left === null && root.right === null
    }

    return res;

}

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

console.log(boundryTraversal(rootNode));