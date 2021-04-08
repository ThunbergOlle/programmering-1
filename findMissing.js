const findMissing = num => {
    const max = Math.max(...num); // Will find highest number
    const min = Math.min(...num); // Will find lowest number
    const missing = []
  
    for(let i=min; i<= max; i++) {
      if(!num.includes(i)) { // Checking whether i(current value) present in num(argument)
        missing.push(i); // Adding numbers which are not in num(argument) array
      }
    }
    return missing;
  }
  
console.log(findMissing([1,100]));