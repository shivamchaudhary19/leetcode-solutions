
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let element = 0;
    let prevEnd = intervals[0][1];

     for (let i = 1; i < intervals.length ; i++){
        if (intervals[i][0] >= prevEnd){
            prevEnd = intervals[i][1];
        } else {
            element++;
        }
     }
     return element;
};