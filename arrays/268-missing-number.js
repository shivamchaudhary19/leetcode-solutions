
var missingNumber = function(nums) {
    nums.sort((a , b) => a - b);
    let count = 0;
    for (const num of nums) {
        if (num === count) {
            count++;
        } else {
            return count;
        }
    }

    return count;
}

// Here's the optimal Solution using Math 

/*

var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};

*/