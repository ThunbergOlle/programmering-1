let intArr = [0, 0, 1,1,1, 3,3,3,4,4,5,2,2,2,];


/* Ska innehålle ett objekt med {value: number, times: number} */
let dubletter = {};
for(let i = 0; i < intArr.length; i++) {
    let existingIndex = intArr.findIndex(index => index === intArr[i]);
    if(existingIndex > -1){
        dubletter[intArr[i].toString()] = dubletter[intArr[i].toString()] ? dubletter[intArr[i].toString()] + 1 : 1;
        console.log(intArr);
    }
}
console.log(dubletter);
