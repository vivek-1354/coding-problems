function power(x, n) {
    let res = 1;
    for (let i=0; i<n; i++){
        res = res * x
    }
    return res
}

console.log(power(2,3))