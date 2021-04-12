let unsorted = [5, 3, 1, 18, 58, 588, 2, 7, 9 ,10 ,15, 28, -3, -61, 561, 5, 589]
//let unsorted = [3, 1, 5, 18, 58, 588, 2, 7, 9 ,10 ,15, 28, -3, -61, 561, 5]

function sort(arr, index){
    
    if(arr[index] < arr[index - 1]) { [arr[index], arr[index - 1]] =[arr[index-1], arr[index]];}
    if(arr[index - 1] < arr[index - 2]) return sort(arr, index - 1);
    else if(index === arr.length) return arr;
    else return sort(arr, index + 1);
    
}
console.log(sort(unsorted, 1));