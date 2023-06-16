// check if sum of three numbers is equal to given num

function checkTriplet(arr, num){
    let n = arr.length
    for(let i=0; i<n-2;i++){
        for(let j = i+1; j<n-1; j++){
            for(let k = j+1; k< n; k++){
                console.log(`(${arr[i]},${arr[j]},${arr[k]})`)
                if(arr[i]+arr[j]+arr[k]===num){
                    // console.log(`(${arr[i]},${arr[j]},${arr[k]})`)
                    return true
                }
            }
        }
    }
    return false
}


console.log(checkTriplet([2,3,4,8,9,20,40],32))
console.log(checkTriplet([1,2,5,6],14))