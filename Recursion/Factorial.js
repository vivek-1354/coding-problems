function findFactorial(num) {
    if (num ==0){
        return 1
    }
    else { 
        return num*findFactorial(num-1)
    }
}
// console.log(findFactorial(5))

// factorial using tail recursion

function factorial_using_tail_Recursion(num, k=1){
    if (num ==0)
        return k
        console.log(k)
    return factorial_using_tail_Recursion(num-1, k*num)
}

console.log(factorial_using_tail_Recursion(6))  // 720

// Itrative solution

function findFactorialIterative(num){
    let res = 1;
    for(let i = num; i >0 ; i--){
        res *= i
    }
    return res
}
// console.log(findFactorialIterative(5))


// count Trailing Zeros in Factorial of given result 
// this solution work for number that is less the 23

function countTrailingZero(num) {
    let fact = findFactorial(num)
    let count = 0
    while (fact%10 ==0){
        // console.log(fact)
       fact = Math.floor(fact/10)
       count++
    }
    return count
}

// console.log(countTrailingZero(5))
// console.log(countTrailingZero(10))
// console.log(countTrailingZero(22))


// for(let i = 5 ; i<1000000000; i *= 2){
//     console.log(i)
// }