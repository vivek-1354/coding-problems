function partitionFromGivenIdx(arr, idx) {
    let n = arr.length;
    let partArr = []
    for (let i = 0 ;i < n; i++){
            if (arr[i] <= arr[idx]){
                partArr.push(arr[i])
            }
        }
    for (let i = 0 ;i < n; i++){
            if (arr[i] > arr[idx]){
                partArr.push(arr[i])
            }
        }
    for (let i = 0 ;i < n; i++){
         arr[i] = partArr[i]
        }
    return arr;
}

console.log(partitionFromGivenIdx([3,8,6,12,10,7], 5))
console.log(partitionFromGivenIdx([5,13,6,9,12,11,8], 6))