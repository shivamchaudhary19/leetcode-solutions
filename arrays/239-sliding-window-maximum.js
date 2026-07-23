var maxSlidingWindow = function(nums, k) {

    let deque = [];
    let head = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove indices outside the current window
        while (head < deque.length && deque[head] <= i - k) {
            head++;
        }

        // Remove smaller elements from the back
        while (
            head < deque.length &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        // Add current index
        deque.push(i);

        // Store maximum for the current window
        if (i >= k - 1) {
            result.push(nums[deque[head]]);
        }

        // Optional cleanup to prevent deque from growing forever
        if (head > 1000) {
            deque = deque.slice(head);
            head = 0;
        }
    }

    return result;
};