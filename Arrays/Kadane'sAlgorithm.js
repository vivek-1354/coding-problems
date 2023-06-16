function maxConsecutiveSum(arr) {
    let n = arr.length;
    let res = Math.min(...arr)
    for (let i = 0; i<n; i++){
        let maxSum = arr[i]
        for (let j = i+1; j< n; j++){
            if (maxSum < 0){
                maxSum = 0
            }
            maxSum += arr[j]
            res = Math.max(res, maxSum)
        }
    }
    return res
}

// console.log(maxConsecutiveSum([1,2,3,-2,5]))
// console.log(maxConsecutiveSum([-1,-2,3,-4]))

// solution 2

function maxSubArraySum(arr){
    let n = arr.length;
    let sumSoFar = 0;
    let res = Math.min(...arr)

    for (let i = 0; i<n; i++){
        sumSoFar += arr[i]

        res = Math.max(res, sumSoFar)
    }

    return res
}

console.log(maxSubArraySum([1,2,3,-2,5]))