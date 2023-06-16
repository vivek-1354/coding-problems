const mergeTwoSortedArr = require('./mergeTwoSortedArr')

function merge(arr, low, mid, high){
    let n1 = mid-low+1;
    let n2 = high-mid;
    const left = [];
    const right = [];

    for(let i = 0; i < n1; i++){
        left[i]= arr[low+i]
    }
    for(let i = 0; i < n2; i++){
        right[i]= arr[mid+i+1]
    }
    return mergeTwoSortedArr(left, right)
}


 
// console.log(merge([10,20,40,15,20,30],0,2,5))

function mergeSort(arr, l, r){
    if (r > l){        
        let m = l + Math.floor((r-l)/2)
        mergeSort(arr, l, m )
        mergeSort(arr, m+1, r)   
        return merge(arr, l, m, r)
    }
}

let arr = [10,5,30,1,7]
console.log(mergeSort(arr, 0, 4))
