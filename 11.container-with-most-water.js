/*
 * [11] Container With Most Water
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (41.64%)
 * Total Accepted:    10.4K
 * Total Submissions: 25K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * 
 * 
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let area = [];
    // let result = []
    // for (let left = 0; left < height.length; left++){
    //     area[left] = [];
    //     for (let right = left; right < height.length; right++){
    //         result.push(area(left.right, height));
    //     }
    // }
    // return Math.max(...result);
    let left = 0;
    let right = height.length - 1;
    let result = (right - left) * Math.min(height[left], height[right]);
    while (left < right) {
        result = Math.max(result, (right - left) * Math.min(height[left], height[right]));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};