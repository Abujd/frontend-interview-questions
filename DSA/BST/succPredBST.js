import { BST } from "./index.js";

var succPredBST = function (root, key) {
    let res = [];
    function inorder(root) {
        if (root === null) return;
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);

    }
    inorder(root);
    let keyIndex = res.indexOf(key);
    let pre = keyIndex === 0 ? -1 : res[keyIndex - 1];
    let suss = keyIndex === res.length - 1 ? -1 : res[keyIndex + 1]
    return [pre, suss];
};


// Input: root = [8,3,10,1,6,null,14,null,null,4,7,13], key = 6

const tree = new BST();

tree.addNode(8);
tree.addNode(3);
tree.addNode(10);
tree.addNode(1);
tree.addNode(6);
tree.addNode(4);
tree.addNode(7);
tree.addNode(14);
tree.addNode(13);

let root = tree.root;

let key = 6;

console.log(succPredBST(root, key));
