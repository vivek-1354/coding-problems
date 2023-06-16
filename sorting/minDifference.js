function minDiff(arr){
    let n = arr.length;
    let res = Infinity
    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++){
            res = Math.min(res, Math.abs(arr[i]- arr[j]))
        }
    }
    return res;
}

console.log(minDiff([1,8,12,5,18]))