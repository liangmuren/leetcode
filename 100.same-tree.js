/*
 * [100] Same Tree
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (47.65%)
 * Total Accepted:    6.1K
 * Total Submissions: 12.7K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 示例 1:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * 输出: false
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//     if (p == null && q == null) {
//         return true;
//     }
//     if (p == null & q != null) {
//         return false;
//     }
//     if (p != null && q == null) {
//         return false;
//     }
//     if (p != null && q != null) {
//         if (p.val != q.val) {
//             return false;
//         } else {
//             return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//         }
//     }
// };

var isSameTree = function(p, q) {
    if (!p || !q ) {
        return p===q;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) && p.val===q.val;
};
