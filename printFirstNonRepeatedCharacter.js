let string = 'bbokasaaksokadkc';


function find() {
    for (let i = 0; i < string.length; i++) {
        let isRepeated = false;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) isRepeated = true;
        }
        if (!isRepeated) return string[i];
    }

}
console.log(find());