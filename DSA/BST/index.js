class TreeNode {
    constructor(val) {
        this.left = null,
            this.right = null,
            this.val = val

    }
}

class BST {
    constructor() {
        this.root = null;
    }
    addNode(val) {
        let newNode = new TreeNode(val);

        if (this.root === null) {
            this.root = newNode;
            return this.root;
        }
        let current = this.root;
        while (current !== null) {
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return;

                }
                else current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return;

                }
                else current = current.right
            };
        }
    }

    // deleteNode(root, key) {

    //     //Replace the deleted node with its left subtree, then attach the deleted node's right subtree to the rightmost node of the left subtree.

    //     //empty tree 
    //     if (root === null) return null;
    //     //find node to delete 

    //     let tempRoot = root;
    //     let parentNode;
    //     while (tempRoot !== null && key !== tempRoot.val) {
    //         if (key < tempRoot.val) {
    //             parentNode = tempRoot;
    //             tempRoot = tempRoot.left;
    //         }
    //         else {
    //             parentNode = tempRoot;
    //             tempRoot = tempRoot.right;
    //         }
    //     }
    //     if (tempRoot === null) return null;
    //     console.log(parentNode, tempRoot);

    //     //Leaf Node delete

    //     if (tempRoot.left === null && tempRoot.right === null) {
    //         if (parentNode === null) return null; //only single node in tree

    //         if (parentNode.left === tempRoot) {
    //             parentNode.left = null;
    //         } else {
    //             parentNode.right = null;
    //         }
    //         return root;
    //     }

    //     // Case 2: Only right child
    //     if (tempRoot.left === null) {
    //         if (parentNode.left === tempRoot) {
    //             parentNode.left = tempRoot.right;
    //         } else {
    //             parentNode.right = tempRoot.right;
    //         }

    //         return root;
    //     }
    //     // Case 3: Only left child

    //     if (tempRoot.right === null) {
    //         if (parentNode) { }
    //     }


    //     parentNode.left = tempRoot.left;
    //     let subTree = tempRoot.right;
    //     if (tempRoot.left === null)
    //         return null;

    //     while (tempRoot.left !== null) {
    //         tempRoot = tempRoot.left;
    //     }
    //     tempRoot.right = subTree;

    //     return root;
    // };
}


function inorder(root) {
    if (root === null) return;

    inorder(root.left);
    console.log(root.val);
    inorder(root.right);

}

// const tree = new BST();
// let root = tree.addNode(8);
// tree.addNode(3);
// tree.addNode(10);
// tree.addNode(11);
// tree.addNode(12);



// // console.log(tree.deleteNode(root, 10));
// inorder(root);



export { BST, TreeNode };
