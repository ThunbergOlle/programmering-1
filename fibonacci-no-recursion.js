function calc(n){
    let result = [0, 1];
    while(result.length < n){
        result.push(result[result.length - 2] + result[result.length - 1]);
    }
    return result[result.length - 1];
}
console.log(calc(13));