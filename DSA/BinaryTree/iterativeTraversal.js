class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

class BinaryTree {
    constructor() {

    }
    preOrder(root) {
        let stack = [];
        let res = [];
        if (root === null) return res;

        stack.push(root);
        while (stack.length !== 0) {
            root = stack.pop();
            res.push(root.val);

            if (root.right !== null) {
                stack.push(root.right)
            }
            if (root.left !== null) {
                stack.push(root.left)
            }
        }
        return res;

    }
    inOrder(root) {
        let stack = [];
        let res = [];
        let treeNode = root;
        while (true) {
            if (treeNode !== null) {
                stack.push(treeNode);
                treeNode = treeNode.left;
            } else {
                if (stack.length == 0) break;
            }
            treeNode = stack.pop();
            res.push(treeNode);
            treeNode = treeNode.right;
        }
        return res;
    }

    postOrder(root) {


    }
    allTraversalInOneGo(root) {
    }
}

let rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
rootNode.right.right = new Node(7);

let tree = new BinaryTree();
console.log(tree.inOrder(rootNode));
;



