/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var moveZeroes = function(nums) {
    let arr = [];
    let zero = [];
    for (const num of nums){
        if (num != 0){
            arr.push(num);
         } else{
            zero.push(num);
         }
         
    } 
    let merged = [...arr , ...zero]
    for (let i = 0 ;  i < merged.length ; i++){
        nums[i] = merged[i]
    }
};