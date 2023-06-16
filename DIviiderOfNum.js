function dividersOfNumber(num) {
    let dividers = [1];
    for (let i = 2; i<=num; i++ ){
        if(num% i === 0){
        dividers.push(i)}
    }
    return dividers;
}


console.log(dividersOfNumber(100))
console.log(dividersOfNumber(25))
console.log(dividersOfNumber(11))