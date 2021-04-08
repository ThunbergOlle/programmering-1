let arr = [6,3,2,1,5,9, -5,-1,2,5,-8,1,2,3];


let iterations = 0;
function sort(){
    let switched = false;
    for(let i = 0; i < arr.length; i++){
        iterations++;
        if(arr[i] < arr[i-1]) {
            [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            switched = true;
        }
        if(switched === false && i === arr.length -1 )return arr;
    }
    return sort();
    
    
}
console.log(sort());
console.log(iterations)