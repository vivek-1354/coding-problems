function maxDifference(arr) {
    let n = arr.length;
    let max_diff = 0
    for(let i=0; i< n ; i++){
        for (let j = i+1; j < n; j++) {
           max_diff = Math.max(max_diff, arr[j] - arr[i])
        }
    }
    return max_diff
}


console.log(maxDifference([2,3,10,6,4,18,1]))
console.log(maxDifference([10,20,30]))