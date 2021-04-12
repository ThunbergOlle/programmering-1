let charCodeArr = [65, 66, 67];
let s = '';
for(let i = 0; i < charCodeArr.length; i++){
  s += String.fromCharCode(charCodeArr[i]);
}
console.log(s);