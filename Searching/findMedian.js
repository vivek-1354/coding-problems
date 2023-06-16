let arr1 = [10,20,30]
let arr2 = [5,15,25]


// let temp = arr1.concat(arr2)
// sorted = temp.sort((a,b)=>a-b)
// console.log(sorted)

function findMedian(arr1,arr2){
    let temp = arr1.concat(arr2).sort((a,b)=>a-b)
    n = temp.length
    if(n%2 != 0){
        return temp[Math.floor(n/2)]
    }else{
        const median = (temp[n/2]+temp[n/2-1])/2
        return median
    }
}

console.log(findMedian([10,20,30,40,50],[5,15,25,35,45]))
console.log(findMedian([1,2,3,4,5,6],[10,20,30,40,50]))
console.log(findMedian(arr1,arr2))