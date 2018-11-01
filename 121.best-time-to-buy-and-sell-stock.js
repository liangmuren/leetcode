/*
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (43.47%)
 * Total Accepted:    12.2K
 * Total Submissions: 28.1K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 
 * 注意你不能在买入股票前卖出股票。
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let start = 0;
//     let end = prices.length - 1;
//     let p = 0;
//     for (let i = start; i <= end; i++) {
//         for (let j = i; j <= end; j++) {
//             if (prices[j] - prices[i] > p) {
//                 p = prices[j] - prices[i];
//             }
//         }
//     }
//     return p;
// };

var maxProfit = function (prices) {
    let minprice = prices[0];
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice)
            minprice = prices[i];
        else if (prices[i] - minprice > maxprofit)
            maxprofit = prices[i] - minprice;
    }
    return maxprofit;
};
