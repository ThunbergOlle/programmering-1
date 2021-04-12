let arr = [1, 2, 3, 45, 1,1,7, 8];

arr = arr.sort((a, b) => a - b);
console.log(arr);

function getMedian(arr) {
    if(arr.length % 2 !== 0) return arr[Math.floor(arr.length / 2)];
    else {
        let higherVal = arr[arr.length / 2];
        let lowerVal = arr[( arr.length / 2 ) - 1]
        let median = (higherVal + lowerVal) / 2;

        return median;
    }
}
console.log(getMedian(arr));

