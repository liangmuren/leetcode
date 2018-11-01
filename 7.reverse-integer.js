/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.37%)
 * Total Accepted:    443.7K
 * Total Submissions: 1.8M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x > 2147483647 || x < -2147483648 || x == 0) { return 0 };
    while (x % 10 == 0) {
        x = Math.floor(x / 10);
    }
    let y = 0,
        flag = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    while (x != 0) {
        y = y * 10 + x % 10
        x = Math.floor(x / 10);
    }
    if (y > 2147483647 || y < -2147483648 ) { return 0 };
    return y * flag;
}
