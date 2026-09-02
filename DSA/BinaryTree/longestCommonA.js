import { Node } from "../BinaryTree/treeTraversal.js";


var lowestCommonAncestorBT = function (root, p, q) {
    var getPath = function (root, target, ans) {
        if (root === null) return false;
        ans.push(root.val);

        if (root.val === target) return true;

        if (getPath(root.left, target, ans) || getPath(root.right, target, ans))
            return true;

        ans.pop();

        return false;
    }

    if (root === null) return [];

    let rootToP = [];
    let rootToQ = [];
    getPath(root, p, rootToP);
    getPath(root, q, rootToQ);
    console.log(rootToP, rootToQ);


    let ans = 0;
    for (let i = 0; i < Math.min(rootToP.length, rootToQ.length); i++) {
        if (rootToP[i] === rootToQ[i]) ans = rootToP[i]
        else break;
    }
    return ans;

};

var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return null;

    while (root !== null) {
        if (root.val < p && root.val < q) {
            root = root.left;
        } else if (root.val > p && root.val > q) {
            root = root.right;
        } else {
            return root.val;
        }
    }
}

let rootNode = new Node(3);

rootNode.left = new Node(5);
rootNode.right = new Node(1);

rootNode.left.left = new Node(6);
rootNode.left.right = new Node(2);

rootNode.right.left = new Node(0);
rootNode.right.right = new Node(8);

rootNode.left.right.left = new Node(7);
rootNode.left.right.right = new Node(4);
let p = 5, q = 4;
console.log(lowestCommonAncestor(rootNode, p, q));

