/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let answer = [];
    let temp = [];
    let hold = []; // For holding the intervals of 2nd condition for sometime
    let compare = [newInterval[0], newInterval[1]];

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            temp.push(intervals[i][0], intervals[i][1]);
            answer.push(temp);
            temp = [];
        } else if (intervals[i][0] > newInterval[1]) {
            temp.push(intervals[i][0], intervals[i][1]);
            hold.push(temp);
            temp = [];
        } else {
            compare[0] = Math.min(intervals[i][0], compare[0]);
            compare[1] = Math.max(intervals[i][1], compare[1]);
        }
    }

    answer.push(compare);
    for (let i = 0 ; i < hold.length ; i++){
        answer.push(hold[i]);
    }
    return answer;
};

// Here is the more optimal approach with less memory consumed and removing unnecessary variables.

var insert = function(intervals, newInterval) {
    let answer = [];

    for (let i = 0; i < intervals.length; i++) {

        if (intervals[i][1] < newInterval[0]) {
            answer.push(intervals[i]);
        }

        else if (intervals[i][0] > newInterval[1]) {
            answer.push(newInterval);

            while (i < intervals.length) {
                answer.push(intervals[i]);
                i++;
            }

            return answer;
        }

        else {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }
    }

    answer.push(newInterval);

    return answer;
};