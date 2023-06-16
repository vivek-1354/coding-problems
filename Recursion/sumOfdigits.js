//  using recursion
function sumOfDigits(digit, sum=0){
    if (digit === 0){
        return sum
    }
    return sumOfDigits(Math.floor(digit/10), sum+digit%10)
}


console.log(sumOfDigits(253))
console.log(sumOfDigits(9999))                              
console.log(sumOfDigits(32899))