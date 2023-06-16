function fibonacci_using_recursion(num){
    if (num <= 1){
        return num
    }
    return fibonacci_using_recursion(num-1)+fibonacci_using_recursion(num-2)
}


console.log(fibonacci_using_recursion(7))