function frequencyCount(arr) {
    let n = arr.length;
    for( let i = 0; i< n; i++){
        var count = 1
        for(let j = i+1; j < n; j++){
            if (arr[j] == arr[i]){
                count++
                i++;
            }
            else {
                console.log(arr[i], count)
                break
            }
        }
    }
    // if (n == 1 || arr[n-1] != arr[n-2]){
    //     console.log(arr[n-1], count)
        
    // }
}

console.log(frequencyCount([10,10,10,30,30,40]))
console.log(frequencyCount([10,10,10,40]))