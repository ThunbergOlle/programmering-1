let amountOfDices = 1000000;

function throwDice(){
    return Math.floor(Math.random() * 6) + 1  
}
let total = 0;
for(let i = 0; i < amountOfDices; i++){
    total += throwDice();
}
console.log('Average: '+ total / amountOfDices);