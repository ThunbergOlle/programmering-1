let input = 'mesas';

/*
    1. Kolla genom inputen.
    2. Flytta nuvarande index ett steg åt höger tills vi kommer till slutet
    3. Gör så med nästa bokstav tills du har testat med alla.

    // tre -> rte -> ret
    // ret -> ert -> etr
    // etr -> ter -> tre

*/

/* Den sträng som vi ska jämföra vår input mot  */
let matchAgainst = 'sesma';

/* Håll koll på hur många gånger vi har kört funktionen */
let iterations = 0; 

/* Tar in strängen att editera som input */
function moveFirstChar(string){
    /* Checkar om iterationen har gått genom alla möjliga tal (och eventuellt lite mer) samt om längden på strängen inte stämmer överens */
    if(iterations > string.length**2 || string.length !== matchAgainst.length) return 'Ej anagram';
    /* Om det stämmer så returnera att det fungerade. */
    if(string === matchAgainst) return 'Sesam öppnar sig';
    /* Konvertera strängen till en array */
    const s = string.split('');
    
    /* Loopa genom strängen som en array med start på nummer 1. */
    for(let i = 1; i <= string.length; i++){
        /* Flytta det nuvarande nummert höger i arrayen. */
        [s[i], s[i - 1]] = [s[i - 1],s[i]];

        /* Detta behövs för att göra så att förflyttningen "wrappar" runt när den kommer till slutet */
        if(i === string.length) [s[i], s[0]] = [s[0], s[i]];
        
        /* Konvertera tillbaka resultatet till en sträng */
        let result = s.join('');
        console.log(result);
        
        /* Kolla om den stämmer */
        if(result === matchAgainst) return 'Sesam öppnar sig';
     
    }
    let result = s.join('');
    iterations ++;
    return moveFirstChar(result);
}
console.log(moveFirstChar(input));
