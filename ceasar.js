let input = 'ö';
let amount = 3;
let output = '';


function encrypt(input, amount){
    let charVal = input - 97;
    if(charVal == 132) {charVal -= 106;}
    if(charVal == 131) {charVal -= 104;}
    if(charVal == 149) {charVal -= 121;}
    charVal += amount; 
    console.log(charVal);
    charVal = charVal % 29;
    console.log(charVal);
    if(charVal == 26) {charVal += 106;}
    if(charVal == 27) {charVal += 104;}
    if(charVal == 28) {charVal += 121;}
    
    return charVal + 97;
}

for(let i = 0;i < input.length; i++){
    let newCharVal = encrypt(input[i].charCodeAt(0), amount);
    
    output += String.fromCharCode(newCharVal);
}
console.log(output);