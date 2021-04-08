let string1 = "Hejba";
let string2 = "Hejca";


function prepare(s1, s2){
    /* konvertera båda strängar till nummer */
    if(s1.length !== s2.length) return false;
    const chars1 = [], chars2 = [];
    for(let i = 0; i < s1.length; i++) {
        chars1.push(s1.charCodeAt(i));
        chars2.push(s2.charCodeAt(i));
        
    }
    
    return JSON.stringify(sort(chars1)) === JSON.stringify(sort(chars2));
}
function sort(arr){
    let switched = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            switched = true;
        }
        if(!switched && i === arr.length - 1) {
            console.log(arr);
            return arr;
        }
    }

    return sort(arr);
}




console.log(prepare(string1, string2));