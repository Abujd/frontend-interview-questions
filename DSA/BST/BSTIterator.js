
import { BST } from "./index.js";

class BSTIterator {
    constructor(root) {
        this.stack = [];

        this.pushAllLeft = function (root) {
            while (root !== null) {
                this.stack.push(root);
                root = root.left;
            }
        };
        this.pushAllLeft(root);

    }
    next = function () {
        let nextNode = this.stack.pop();
        this.pushAllLeft(nextNode.right);

        return nextNode.val
    }
    hasNext = function () {
        if (this.stack.length > 0) {
            return true;
        }
        return false;
    }

}


const tree = new BST();

tree.addNode(7);
tree.addNode(3);
tree.addNode(15);
tree.addNode(9);
tree.addNode(20);

let root = tree.root;

let obj = new BSTIterator(root);

console.log(obj.next());     // 3
console.log(obj.next());     // 7
console.log(obj.hasNext());  // true
console.log(obj.next());     // 9
console.log(obj.next());     // 15
console.log(obj.next());     // 20
console.log(obj.hasNext());  // false