import { TreeNode } from "./index.js";

var bstFromPreorder = function (preorder) {
    let preIndex = 0;
    let inorder = [...preorder].sort((a, b) => a - b);

    function build(start, end) {
        if (start > end) return null;
        let rootValue = preorder[preIndex++];
        let rootNode = new TreeNode(rootValue);
        let rootNodeIndex = inorder.indexOf(rootValue);
        rootNode.left = build(start, rootNodeIndex - 1);
        rootNode.right = build(rootNodeIndex + 1, end);
        return rootNode;
    }

    return build(0, preorder.length - 1);

};

function inorder(root) {
    if (root === null) return;

    inorder(root.left);
    console.log(root.val);
    inorder(root.right);

}

// Input: preorder = [8,5,1,7,10,12]
// inorder - (6) [1, 5, 7, 8, 10, 12]

let preorder = [8, 5, 1, 7, 10, 12];

inorder(bstFromPreorder(preorder));
