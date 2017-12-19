let _ = require('lodash');

function getMergedIntervals(intervals) {

    let ordered = _.orderBy(intervals, function(item) {
        return item[0];
    })
    
    let mergedIntervals = [];
    _.reduce(ordered, (curr, next) => {
        if(checkForOverlap(curr, next)){
            mergedIntervals.push([curr[0], next[1]]);
        }

        return next;
    });

    return mergedIntervals;
}

function checkForOverlap(intervalOne, intervalTwo) {
    if(intervalOne[0] <= intervalTwo[0] && intervalOne[1] >= intervalTwo[0]) {
        return true;
    }
}

module.exports = { getMergedIntervals: getMergedIntervals };