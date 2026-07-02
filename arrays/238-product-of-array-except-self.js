/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

// Here's my first and non optimal approach with time complexity O(n^2)

    /* let result = [];
    let product = 1;
    for (let i = 0 ; i < nums.length ; i ++){
        for(let j = 0 ; j <nums.length ; j++){
            if(j == i){
                continue;
            } else{
                product *=nums[j];
            }
        } result.push(product);
        product = 1;
    } return result
    */

// Here's optimal approach

 const n = nums.length;

    const left = new Array(n);
    const right = new Array(n);
    const result = new Array(n);

    left[0] = 1;
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;

};
