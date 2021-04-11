let intArr = [0,1,2,5,3,4,5,3,1,6,6,8,12,10,11,12];
for(let i = 0; i < intArr.length; i++){
    intArr[intArr[i]] *= -1;
    if(intArr[intArr[i]] > 0) console.log(intArr[i]);
}