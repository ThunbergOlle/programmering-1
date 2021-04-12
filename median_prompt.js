let arr = [];


function getMedian(arr) {
    arr = arr.sort((a, b) => a - b);
    if(arr.length % 2 !== 0) return arr[Math.floor(arr.length / 2)];
    else {
        let higherVal = arr[arr.length / 2];
        let lowerVal = arr[( arr.length / 2 ) - 1]
        let median = (higherVal + lowerVal) / 2;

        return median;
    }
}
function ask(){
  let val = parseInt(prompt("Skriv in ett tal"));
  if(!val) return ask();
  if(val >= 0){ arr.push(val); ask();}
  else console.log(getMedian(arr));
}

ask();
