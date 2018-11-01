/*
 * [15] 3Sum
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (15.75%)
 * Total Accepted:    13.8K
 * Total Submissions: 87.3K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort();
    // let a = 0, b = 1, c = 2;
    let result = [];
    for (let a = 0; a < nums.length - 2; a++) {
        for (let b = a + 1; b < nums.lengt - 1; b++) {
            for (let c = b + 1; c < nums.length; c++) {
                if (nums[a] + nums[b] + nums[c] == 0) {
                    console.log(a + b + c);
                    result.push[nums[a], nums[b], nums[c]];
                }
            }
        }
    }
    return result;
};
