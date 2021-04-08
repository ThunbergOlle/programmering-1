let intArr = [0,1,2,3,3,4,5,5,6,6,8,9,10,11,12];
for(let i = 0; i < intArr.length; i++){
    intArr[intArr[i]] *= -1;
    if(intArr[intArr[i]] > 0){
        console.log(intArr[i]);
    }
}