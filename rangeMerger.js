var _ = require('lodash');

function getMergedIntervals(intervals) {

    var ordered = _.orderBy(intervals, function(item) {
        return item[0];
    })
    
    var mergedIntervals = [];
    for(let i = 0; i < ordered.length; i++) {
        var curr = ordered[i];
        var next = ordered[i + 1];

        console.log("Curr: " + curr + " Next: " + next);

        if(next) {
            if(checkForOverlap(curr, next))
            {
                mergedIntervals.push([curr[0], next[1]]);
            }
        }
    }

    return mergedIntervals;
}

function checkForOverlap(intervalOne, intervalTwo) {
    if(intervalOne[0] <= intervalTwo[1]) {
        if(intervalTwo[1] >= intervalOne[0])
        {
            return true;
        }
    }
}

module.exports = { getMergedIntervals: getMergedIntervals };

/*var result = _.reduce([1, 2, 3], function(sum, iter) {
    return sum + iter;
});

var ranges = [
    [1,3], [2,6], [7,8], [3,4], [5, 8], [-1,0], [7,10]
];

var ordered = _.orderBy(ranges, function(item) {
    return item[0];
})

var ranges = [];
var results = _.reduce(ordered, function(current, next) {
    if(current[0] <= next[0] && current[1] >= next[1]) {
        ranges.push([current[0], next[1]]);
    }

    return next;
});

console.log(ranges);*/