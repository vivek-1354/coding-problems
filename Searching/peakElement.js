function findPeakEle(arr){
    let n = arr.length
    if(arr[1]<arr[0]) return arr[0]
    else{
        for(let i = 1; i< n; i++){
            if(arr[i] > arr[i-1] && arr[i]> arr[i+1]){
                return arr[i]
            }
        }
    }
    if(arr[n-2]<arr[n-1]) return arr[n-1]
}

// console.log(findPeakEle([5,10,20,15,7]))
// console.log(findPeakEle([10,20,15,5,23,90,67]))
// console.log(findPeakEle([80,70,60]))
console.log(findPeakEle([1,2,3]))
console.log(findPeakEle([10,20,15,5,25,1,2, ]))


// find a list of peak element that is greater than left element and also greater than right element
function findAllPeakEle(arr){
    const peakEle = []
    if(arr[1]<arr[0]) peakEle.push(arr[0])
    else{
        for(let i = 1; i< arr.length; i++){
            if(arr[i] > arr[i-1] && arr[i]> arr[i+1]){
                peakEle.push(arr[i])
            }
        }
    }
    return peakEle
}
// console.log(findAllPeakEle([5,10,20,15,7]))
// console.log(findAllPeakEle([10,20,15,5,23,90,67,70,55   ]))
// console.log(findAllPeakEle([80,70,60]))