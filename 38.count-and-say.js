/*
 * [38] Count and Say
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (44.35%)
 * Total Accepted:    9.7K
 * Total Submissions: 21.9K
 * Testcase Example:  '1'
 *
 * 报数序列是指一个整照其中的整数的顺序进数序列，按行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n == 1) {
        return '1';
    } else {
        return say(countAndSay(n - 1));
    }
};

var say = function (num) {
    let number = String(num);
    let count = 0;
    let n = number[0];
    let result = '';
    for (let i = 0; i < number.length; i++){
        if (number[i] == n) {
            count++;
        } else {
            result += count;
            result += n;
            n = number[i];
            count = 1;
        }
    }
    result += count;
    result += n;
    return result;
}