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
        if (root === null) {
            return
        }

        console.log(root.val);
        this.preOrder(root.left);
        this.preOrder(root.right);

    }
    inOrder(root) {
        if (root === null)
            return;

        this.inOrder(root.left);
        console.log(root.val);

        this.inOrder(root.right);
    }
    postOrder(root) {
        if (root === null)
            return;

        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.val);

    }
    levelOrder(root) {
        //BFS
        if (root === null)
            return [];

        let queue = [root], res = [];

        while (queue.length > 0) {
            let level = [];
            let levelSize = queue.length;
            for (let j = 0; j < levelSize; j++) {
                let node = queue.shift();
                level.push(node.val);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }

            }
            res.push(level);
        }
        return res;
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
tree.levelOrder([]);

export { Node, BinaryTree };


