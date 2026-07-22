/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    let result = [];
    const arr = [...map];
    arr.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        result.push(arr[i][0])
    }

    return result;
};