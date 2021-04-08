function Ack(n,x){
    if(!n && x) return x+1;
    if(!x && n) return Ack(n-1, 1);
    if(n && x) return Ack(n-1,Ack(n, x-1));
    else return false;
}
function ackermann(m, n) {
    return m === 0 ? n + 1 : ackermann(m - 1, n === 0  ? 1 : ackermann(m, n - 1));
}
