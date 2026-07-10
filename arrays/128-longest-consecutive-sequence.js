
var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {

        if (!numSet.has(num - 1)) {

            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
};