function checkSorted(arr) {
    // let res = true;
    for (let i = 1; i < arr.length; i++) {
        console.log(i)
        if (arr[i-1] > arr[i]){
            return false
        }   
    }
    return true
}

console.log(checkSorted([10,20,30,40,35,50,60]))