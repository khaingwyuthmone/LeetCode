//Binary Tree Preorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root, nodes =[]) {
    if(root){
        let returnNodes = nodes;
        returnNodes.push(root.val);
        if(root && root.left){
            preorderTraversal(root.left, returnNodes);
        }
        if(root && root.right){
            preorderTraversal(root.right, returnNodes);
        }   
    }else{
        return [];
    }
    
    return nodes;
};