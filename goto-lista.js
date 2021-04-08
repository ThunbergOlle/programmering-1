let input = [1, 2,3,4,1,5,7,59,1,2,3,5,7, 3, 1, 2, 1, 1, 1];
let totalIterations = 0;
function g2(pos){
    totalIterations++;
    if(totalIterations > input.length || !input[pos]) return;
    console.log(input[pos]);
    let nextPos = input[pos] + pos;
    
    return g2(nextPos);
}

g2(input[0]);
