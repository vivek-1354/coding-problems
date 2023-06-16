function subArrWithGivenSum(arr, giv_sum) {
    let n = arr.length;
    for(let i=0; i<n; i++){
        let total = arr[i]
        for(let j=i+1; j<n; j++){
            total += arr[j]
            if(total == giv_sum){
                console.log(i, j)
                return true
            }
        }
    }
    return false
}


console.log(subArrWithGivenSum([1,4,20,3,10,5],33))
console.log(subArrWithGivenSum([2,4],3))
console.log(subArrWithGivenSum([1,4,0,0,3,10,5],7))