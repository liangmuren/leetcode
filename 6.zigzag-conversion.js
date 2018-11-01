/*
 * [6] ZigZag Conversion
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (35.33%)
 * Total Accepted:    8.8K
 * Total Submissions: 24.9K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * 之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"
 * 
 * 实现一个将字符串进行指定行数变换的函数:
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "PAYPALISHIRING", numRows = 3
 * 输出: "PAHNAPLSIIGYIR"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "PAYPALISHIRING", numRows = 4
 * 输出: "PINALSIGYAHRPI"
 * 解释:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) { return s; }
    let result = [];
    let k = 0;
    for (let i = 0; i < numRows; i++){
        result[i] = '';
    }
    for (let i = 1; i <= s.length; i++){
        k = i % (2 * numRows - 2);
        if (k == 0) {
            result[1] += s[i - 1];
        } else {
            k = k < numRows ? k-1 : (2 * numRows - 1 - k);
            result[k] += s[i-1];
        }
    }
    return result.join('');
};
