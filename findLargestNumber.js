let arr = [0, 123, 1,4 ,155, 1,5 ,1,6,16,16 ,1,6,16,6,436,34,6,];

let largestNum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > largestNum) largestNum = arr[i];
}
console.log(largestNum);