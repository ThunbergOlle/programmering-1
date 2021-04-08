let NumArr = [];

function askNum(){
    let res = parseInt(prompt("Skriv in ett tal"));
    NumArr.push(res);
    if(res > 0) return askNum();
    return NumArr;
}