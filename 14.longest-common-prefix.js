/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.77%)
 * Total Accepted:    299.6K
 * Total Submissions: 943.1K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length==0){return '';}
    let minl = strs[0].length;
    let re = '';
    let temp = '';
    strs.forEach(e => {
        if (e.length < minl) {
            minl = e.length;
        }
    })
    for (let i = 0; i < minl; i++) {
        temp = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if(strs[j][i]!=temp){
                return re;
            }
        }
        re += temp;
    }
    return re;
};
