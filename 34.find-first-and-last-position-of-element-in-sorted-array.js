/*
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (31.59%)
 * Total Accepted:    5.1K
 * Total Submissions: 16.2K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let targetRange = [-1, -1];
    let leftIdx = extremeInsertionIndex(nums, target, true);
    if (leftIdx == nums.length || nums[leftIdx] != target) {
        return targetRange;
    }
    targetRange[0] = leftIdx;
    targetRange[1] = extremeInsertionIndex(nums, target, false) - 1;
    return targetRange;
}


function extremeInsertionIndex(nums, target, left) {
    let lo = 0;
    let hi = nums.length;
    let mid = Math.floor((lo + hi) / 2);
    while (lo < hi) {
        mid = Math.floor((lo + hi) / 2);
        if (nums[mid] > target || (left && target == nums[mid])) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}