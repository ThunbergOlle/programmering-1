/* Vil ha 100 första primtal */
let primeNumbers = [];
let counter = 1;

while (primeNumbers.length <= 100){
    let isPrime = true;
    console.log(primeNumbers.length);
    for(let i = 0; i < primeNumbers.length; i++) {
        if(counter % primeNumbers[i] === 0 && primeNumbers[i] !== 1) isPrime = false;
    }
    if(isPrime) primeNumbers.push(counter) ;
    counter++;
}
console.log(primeNumbers);