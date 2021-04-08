let string = 'baaabbbaaab';
let findChar = 'b';
let count = 0;
for(let i = 0; i < string.length; i++){
    if(string[i] === findChar) count++;
}
console.log(count);