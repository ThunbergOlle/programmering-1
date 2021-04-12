let num = parseInt(prompt('Skriv ett nummer'));

function F(x) {
  return x <= 1 ? x : (F(x - 1) + F(x - 2));
}

console.log(F(num - 1));  
