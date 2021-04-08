//: (50°F - 32) x .5556 = 10°C
let input = 50;
function convert(fahren){
    return (fahren - 32) * 5/9;
}
console.log(convert(input));