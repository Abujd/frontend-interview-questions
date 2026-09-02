import { BST } from "./index.js";

var lowestCommonAncestor = function (root, p, q) {

    function getPath(root, target, ans) {
        if (root === null) return false;

        ans.push(root.val);

        if (target === root.val) return true;


        if (getPath(root.left, target, ans) || getPath(root.right, target, ans)) return true;

        ans.pop();

        return false;

    }
    let rootToP = [];
    let rootToQ = [];

    getPath(root, p, rootToP);
    getPath(root, q, rootToQ);


    for (let i = 0; i < Math.min(rootToP.length, rootToQ.length); i++) {
        if (rootToP[i] === rootToQ[i]) {
            return rootToP[i];

        }
        break;
    }
};


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8

const tree = new BST();

tree.addNode(6);
tree.addNode(2);
tree.addNode(8);
tree.addNode(0);
tree.addNode(4);
tree.addNode(7);
tree.addNode(9);
tree.addNode(3);
tree.addNode(5);

let root = tree.root;

let p = 2;
let q = 8;

console.log(lowestCommonAncestor(root, p, q));
