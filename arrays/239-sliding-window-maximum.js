var maxSlidingWindow = function(nums, k) {

    let deque = [];
    let head = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        while (head < deque.length && deque[head] <= i - k) {
            head++;
        }

        while (
            head < deque.length &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[head]]);
        }

        if (head > 1000) {
            deque = deque.slice(head);
            head = 0;
        }
    }

    return result;
};