const analyzeArray = require('./analyzeArray');

test('Analysis of the given array is average: 4, min: 1, max: 8, length: 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6});
})