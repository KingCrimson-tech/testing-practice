function analyzeArray(arr){
    const av = arr.reduce((prev, curr) => prev + curr, 0);
    const arrSorted = arr.sort((a, b) => a - b);
    const mini = arrSorted[0];
    const maxi = arrSorted[arrSorted.length - 1];
    return {
        average: av / arr.length,
        min: mini,
        max: maxi,
        length: arr.length,
    }
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
module.exports = analyzeArray;