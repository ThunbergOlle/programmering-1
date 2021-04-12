let unsorted = [5, 3, 18, 1, 58, 588, 2, 7, 9 ,10 ,15, 28, -3, -61, 561, 5]

function sort(arr){
    let switched = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]) {
            switched = true;
            [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        }
        if(!switched && i === arr.length - 1) return arr;
    }
    return sort(arr);

}

console.log(sort(unsorted));