/*
 * [28] Implement strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (35.75%)
 * Total Accepted:    17.1K
 * Total Submissions: 47.9K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     if (needle.length == 0) {
//         return 0;
//     }
//     let i = 0, j = 0, step = 0;
//     while (i < haystack.length) {
//         j = 0, flag = false, step = 0;
//         while (haystack[i + j] === needle[j] && j < needle.length) {
//             j++;
//             if (haystack[i] === haystack[i + j]&&flag==false) {
//                 step = j;
//                 flag = true;
//             }
//         }
//         if (j === needle.length) {
//             return i;
//         }
//         // console.log('i:' + i + ' step:' + step + ' j:' + j);
//         i += step>1?step:1;
//     }
//     return -1;
// };

var strStr = function(haystack, needle) {
	if (!needle.length) {
		return 0;
	}

	for (let i = 0; i <= haystack.length - needle.length; i++) {
		if (haystack[i] === needle[0]) {
			if (haystack.substring(i, i + needle.length) === needle) {
				return i;
			}
		}
	}
	return -1;
};