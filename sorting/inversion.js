function countInversion(arr){
    let n = arr.length;
    let count = 0
    for (let i = 0; i<n; i++){
        for(let j = i+1; j< n; j++){
           if(arr[i] > arr[j]){
              count++
           }
        }
    } 
    return count
}


console.log(countInversion([2,4,1,3,5]))
console.log(countInversion([10,20,30,40]))
console.log(countInversion([40,30,20,10]))