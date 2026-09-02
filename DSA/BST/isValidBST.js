/*
Validate BST — Assign Range to Each Node

* Assign a **valid range** `(min, max)` to each node.
* Every node's value must fall within its assigned range.
* If a node's value is outside the range, the tree is **not a BST**.
* Recursively validate both subtrees:

  * Left subtree → range becomes `(min, node.val)`
  * Right subtree → range becomes `(node.val, max)`
* **Logic:**
  `left BST && right BST && current node is within range → true`



*/
import { BST } from "./index.js";
let min = -Infinity, max = Infinity;
var isValidBST = function (root, min, max) {
    if (root === null) return true;

    if (root.val <= min || root.val >= max) {
        return false;
    }

    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    );
};


// Input: root = [2,1,3]

const tree = new BST();

tree.addNode(2);
tree.addNode(1);
tree.addNode(3);

let root = tree.root;

console.log(isValidBST(root));
