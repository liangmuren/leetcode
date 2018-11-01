/*
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (29.29%)
 * Total Accepted:    251.9K
 * Total Submissions: 860K
 * Testcase Example:  '4'
 *
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer.
 * 
 * Since the return type is an integer, the decimal digits are truncated and
 * only the integer part of the result is returned.
 * 
 * Example 1:
 * 
 * 
 * Input: 4
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
 * the decimal part is truncated, 2 is returned.
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//     let left = 1,
//         right = x,
//         mid = 0;
//     while (true) {
//         mid = Math.floor((left + right) / 2);
//         if (mid * mid > x) {
//             right = mid - 1;
//         } else {
//             if ((mid + 1) * (mid + 1) > x) {
//                 return mid;
//             }
//             left = mid + 1;
//         }
//     }
// };

var mySqrt = function (x) {
    return  Math.floor(Math.sqrt(x));
};