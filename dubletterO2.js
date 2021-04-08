let intArr = [0,1,2,3,3,4,5,5,6,6,8,9,10,11,12];

let dubletter = [];

for(let i = 0; i < intArr.length; i++){
    for(let j = 0; j < intArr.length; j++){
        if(intArr[i] === intArr[j] && i !== j) {dubletter.push(intArr[i]); intArr[i] = -1}; 
    }
    
}
console.log(dubletter);