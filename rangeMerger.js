let _ = require('lodash');

function getMergedIntervals(intervals) {

    let ordered = _.orderBy(intervals, function(item) {
        return item[0];
    })
    
    let mergedIntervals = [];
    for(let i = 0; i < ordered.length; i++) {
        let curr = ordered[i];
        let next = ordered[i + 1];

        if(next) {
            if(checkForOverlap(curr, next)) {
                mergedIntervals.push([curr[0], next[1]]);
            }
        }
    }

    return mergedIntervals;
}

function checkForOverlap(intervalOne, intervalTwo) {
    if(intervalOne[0] <= intervalTwo[0] && intervalOne[1] >= intervalTwo[0]) {
        return true;
    }
}

module.exports = { getMergedIntervals: getMergedIntervals };