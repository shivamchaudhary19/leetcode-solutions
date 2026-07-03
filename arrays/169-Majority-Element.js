/**
 * @param {number[]} nums
 * @return {number}
 */


var majorityElement = function(nums) {
    const n = nums.length;
    let count = {};
    for (let i = 0 ; i < n ; i++){
        if (count[nums[i]]){
            count[nums[i]] += 1;
        } else{
            count[nums[i]] = 1;
        }
    } 

    for (const key in count) {
        if (count[key] > n / 2){
            return Number(key);
        }
    }
};