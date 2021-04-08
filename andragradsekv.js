function calc(p, q){
    let sqrtable = (p/2)**2 - q;
    if(sqrtable <= 0) return 'Finns inga reella rötter';

    let real = Math.sqrt(sqrtable);
    let x1 = -p/2 + real;
    let x2 = -p/2 - real
    return[x1, x2];
}
console.log(calc(2, -3));