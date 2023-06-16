function checkPrime(num) {
    if(num ===1){
        return false
    }
    for(let i=2; i<= Math.floor(num/2); i++){
        // for(let i=2; i*i <= num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

// console.log(checkPrime(25))
// console.log(checkPrime(97))
// console.log(checkPrime(1))
// console.log(checkPrime(2))
// console.log(checkPrime(13))
console.log(checkPrime(4))