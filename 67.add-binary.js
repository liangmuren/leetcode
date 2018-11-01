/*
 * [67] Add Binary
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (42.54%)
 * Total Accepted:    6.9K
 * Total Submissions: 16.3K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let m = a.length;
    let n = b.length;
    let max = Math.max(m, n);
    a = zero(max - m) + a;
    b = zero(max - n) + b;
    let flag = false;//是否进位
    let result = '';
    // console.log(a, b);
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    for (let k = 1; k <= max; k++){
        // console.log(a[max - k], b[max - k]);
        if (!flag) {
            if (a[max - k] == '0' && b[max - k] == '0') {
                result += '0';
                flag = false;
            }
            if (a[max - k] == '0' && b[max - k] == '1') {
                result += '1';
                flag = false;
            }
            if (a[max - k] == '1' && b[max - k] == '0') {
                result += '1';
                flag = false;
            }
            if (a[max - k] == '1' && b[max - k] == '1') {
                result += '0';
                flag = true;
            }
        } else {
            if (a[max - k] == '0' && b[max - k] == '0') {
                result += '1';
                flag = false;
            }
            if (a[max - k] == '0' && b[max - k] == '1') {
                result += '0';
                flag = true;
            }
            if (a[max - k] == '1' && b[max - k] == '0') {
                result += '0';
                flag = true;
            }
            if (a[max - k] == '1' && b[max - k] == '1') {
                result += '1';
                flag = true;
            }
        }   
        // console.log(k,result,flag);
    }
    if (flag) {
        result += '1';
    }
    return result.split("").reverse().join("");
};


function zero(n) {
    let result = ''
    for (let i = 0; i < n; i++){
        result += '0';
    }
    return result;
}