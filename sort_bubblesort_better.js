let arr = [2,3,4,1,77,11,237,213,12,146,111,9,11];


let iterations = 0;
function sort(stopAt){
    let switched = false;
    for(let i = 0; i < stopAt; i++){
        iterations++;
        if(arr[i] < arr[i-1]) {
            [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            switched = true;
        }
        if(switched === false && i === stopAt - 1 )return arr;
    }
    return sort(stopAt -1);
}
console.log(sort(arr.length));
console.log(arr.length**2);
console.log(iterations)