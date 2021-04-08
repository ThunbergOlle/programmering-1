
/* Input på vilke nummer vi vill ha i talföljden */

function F(n){
    if(n <= 1) return n; 
    else return (F(n - 1) + F(n - 2));
    
}

/* Optional */
let startTime = new Date();

console.log(F(50));
let endTime = new Date();
console.log(`Det tog ${((endTime - startTime) / 1000)} sekunder`);
