for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 || i % 5 === 0) {
        console.log(`${i % 3 === 0 ? 'Fizz': ''}${i % 5 === 0 ? 'Buzz' : ''} `);
    }else console.log(i);
}