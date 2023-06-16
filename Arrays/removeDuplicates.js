function removeDuplicates(arr) {
    let n = arr.length;
    // let i = 0;
    let j = 0;

    for(let i = 0;  i< n-1; i++){
        if(arr[i] != arr[i+1]){
            arr[j] = arr[i]
            j++
        }
    }
    return arr
}

console.log(removeDuplicates([1,2,2]))