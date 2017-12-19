const merger = require('./rangeMerger');

test('an empty input set returns an empty result set', () => {
    // arrange
    let ranges = [];

    // act
    let actual = merger.getMergedIntervals(ranges);

    // assert
    expect(actual).toHaveLength(0);
});

test('will merge two overlapping ranges', () => {
    // arrange
    var ranges = [
        [1, 2],
        [2, 3]
    ];

    // act
    var actual = merger.getMergedIntervals(ranges);

    // assert
    expect(actual).toEqual([
        [1, 3]
    ]);
});

test('will merge non-consecutive ranges', () => {
    // arrange
    var ranges = [
        [1, 3],
        [2, 6],
        [8, 10],
        [5, 8]
    ];

    // act
    var actual = merger.getMergedIntervals(ranges);

    // assert
    expect(actual).toEqual([
        [1, 6],
        [2, 8],
        [5, 10]
    ]);
});