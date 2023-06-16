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

function find_all_prime_numbers(num) {
    for(let i= 2; i <= num; i++){
        if (checkPrime(i)){
            console.log(i)
         }
    }
}

find_all_prime_numbers(10)