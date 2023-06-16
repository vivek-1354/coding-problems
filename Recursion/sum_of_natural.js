function sumOfNaturalNumbers(num , sum=0) {
    if (num === 0)
        return sum
    return sumOfNaturalNumbers(num-1, sum+num)
}

console.log(sumOfNaturalNumbers(2))
console.log(sumOfNaturalNumbers(4))
console.log(sumOfNaturalNumbers(5))

// without tail recursion

function sumOfNaturalNumbers2(num) {
    if (num === 0)
        return 0
    return num+ sumOfNaturalNumbers(num-1)
}

console.log(sumOfNaturalNumbers2(2))


// without recursion

function sumOfNaturalNumbers3(num) {
    let sum = 0;
    for (let i = 1; i<=num; i++){
        sum += i
    }
    return sum
}


console.log(sumOfNaturalNumbers3(5))