let arr = [0,1,123,5,15,1,6,1];
let reversedArr = [];
for(let i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
}
console.log(arr.reverse());
console.log(reversedArr);