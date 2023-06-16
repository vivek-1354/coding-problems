function findSquareRoot1(num) {
    return Math.floor(Math.sqrt(num) )
}


function findSquareRoot2(num) {
    let mid = Math.floor(num/2)
    for (var i = 2 ; i< mid; i++){
        if(i*i === num) return i
    }

}


// console.log(findSquareRoot1(14))
// // console.log(findSquareRoot2(24))
// console.log(findSquareRoot2(25))

// Efficient Solution Using binary search

function squareRoot(num){
    let low = 1
    let high = num
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let midSq = mid*mid
        if(midSq === num){
            return mid
        } else if(midSq > num){
            high = mid-1
        } else{
            low = mid+1
            ans = mid
        }
    }
    return ans
}

console.log(squareRoot(25))
console.log(squareRoot(10))
console.log(squareRoot(16))
console.log(squareRoot(24))

