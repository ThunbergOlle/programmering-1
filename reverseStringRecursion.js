const reverseString = (string) => {
    return string ? reverseString(string.substr(1)) + string[0] : string;
};

function reverseS(string){
    if(!string) return string;
    else return string[0] + reverseS(string.substr(1));
}


/* 
    1. Skicka in en sträng
    2. Kolla om strängen finns
    3. Om den finns så skicka in efterföljande bokstäver i samma funktion
    4. Returnera värdet av den funktionen samt den första bokstaven efter.
*/
/*
    "abcd" -> "dbca" -> "dcba"
    
*/

function calc(string, index){
    if(index === undefined) return string;
    
    let sArr = string.split("");

    if(index == Math.floor((sArr.length) / 2)) return sArr.join("");
    [sArr[index], sArr[sArr.length - 1 - index]] = [sArr[sArr.length - 1 - index], sArr[index]];
    
    return(calc(sArr.join(""), index + 1));
    
}

console.log(calc('ol', 0));