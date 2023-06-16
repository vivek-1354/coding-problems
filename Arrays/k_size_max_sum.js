function maxConsSumofK(arr, k) {
    let n = arr.length;
    let res = -1
    for (let i = 0; i<n-k; i++){
        let maxSum = arr[i]
        for(let j = i+1; j< i+k; j++){
            maxSum += arr[j]

        }
        res = Math.max(res, maxSum)
    }
    return res
}

console.log(maxConsSumofK([1,8,30,-5,20,7],3))