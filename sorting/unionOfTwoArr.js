function printUnion(arr1, arr2) {
    return new Set([...arr1, ...arr2].sort((a,b)=>a-b))  
}


// console.log(printUnion([10,20,30],[5,20,40,40]))
// console.log(printUnion([3,5,8],[2,8,9,10,15]))


function removeDup(arr){
    let n = arr.length;
    let distinct = []
    for (let i = 1; i<n; i++){
        if (arr[i-1] != arr[i]){
            distinct.push(arr[i-1]) 
        }
    }
    console.log(distinct)
}

removeDup([1,2,3,4,4,5,5,6,7,8,9])

