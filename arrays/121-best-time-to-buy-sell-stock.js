/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {

//=============== My Non Optimal Solution ==================//
    // let max = 0;
    // let i = 0;
    // let j;
    // while(i < prices.length){
    //     j = i+1;
    //     while(j < prices.length){
    //         let profit = prices[j] - prices[i];
    //         if (profit > max){
    //             max = profit;
    //         }
    //         j++;
    //     } i++
    // }
    // return max 

let minPrice = prices[0];
let maxProfit = 0;
let i = 0;

while (i < prices.length){
    if(prices[i] < minPrice){
        minPrice = prices[i];
    } else{
        let profit = prices[i] - minPrice;

        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
    i++
} return maxProfit;

};