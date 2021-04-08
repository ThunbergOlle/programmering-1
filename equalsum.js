let intArr = [0, 1, 3,5, 58, 4, 6];

let checkNum = 7
let matching = [];
// 1. Kolla genom nuvarande index
// 2. ta det minsta numret och addera det.
// 3. 
function calc(i){
    if(i === intArr.length) return matching;
    for(let j = 0; j < intArr.length; j++) {
        console.log(intArr[i], intArr[j]);
        if(intArr[i] + intArr[j] === checkNum && intArr[i] !== intArr[j]) {matching.push([intArr[i], intArr[j]])}
    }
    return calc(i +1);
}
calc(0);
console.log(matching);
/*
for(let i = 0; i < intArr.length; i++){
    let currentVal = intArr[i];
    for(let j = 0; j < intArr.length; j++){
        if(currentVal === checkNum) matching.push(currentVal); 
        if(currentVal + intArr[j] < checkNum) currentVal += intArr[j];
    }
}
*/