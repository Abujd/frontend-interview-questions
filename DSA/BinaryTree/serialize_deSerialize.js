
import { Node } from "../BinaryTree/treeTraversal.js";

/**
 * Encodes a tree to a single string.
 *
 * Approach:
 * 1. Use Level Order Traversal (BFS).
 * 2. Create a queue and push the root into it.
 * 3. While the queue is not empty:
 *    - Remove the front node.
 *    - If the node is null, store "#".
 *    - Otherwise, store its value and push its left and right children.
 * 4. Join all values using "," and return the string.
 */
var serialize = function (root) {

    if (root === null) return "";

    let queue = [root];
    let res = [];

    while (queue.length > 0) {

        const node = queue.shift();

        if (node === null) {
            res.push("#");
        } else {
            res.push(node.val);

            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return res.join(",");
};


/**
 * Decodes the serialized string and reconstructs the tree.
 *
 * Approach:
 * 1. Split the serialized string using ",".
 * 2. Create the root using the first value.
 * 3. Push the root into the queue.
 * 4. While the queue is not empty:
 *    - Remove the front node.
 *    - Take the next two values from the serialized data.
 *    - First value → create the left child.
 *    - Second value → create the right child.
 *    - If the value is "#", don't create a node.
 *    - Push newly created children into the queue.
 * 5. Return the root.
 */
var deserialize = function (data) {

    if (!data) return null;

    let nodes = data.split(",");

    let root = new Node(parseInt(nodes[0]));

    let queue = [root];
    let i = 1;

    while (queue.length > 0 && i < nodes.length) {

        let node = queue.shift();

        // Left child
        let left = nodes[i++];

        if (left !== "#") {
            node.left = new Node(parseInt(left));
            queue.push(node.left);
        }

        // Right child
        let right = nodes[i++];

        if (right !== "#") {
            node.right = new Node(parseInt(right));
            queue.push(node.right);
        }
    }

    return root;
};


let rootNode = new Node(1);

rootNode.left = new Node(2);
rootNode.right = new Node(3);

rootNode.right.left = new Node(4);
rootNode.right.right = new Node(5);


let data = serialize(rootNode);

console.log("Serialized:", data);

console.log("Deserialized:", deserialize(data));

