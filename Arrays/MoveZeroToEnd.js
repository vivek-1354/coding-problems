function moveAllzeroToEnd(bin_arr) {
    let n = bin_arr.length;
    for(let i = 0; i<n; i++){
        // console.log(bin_arr)
        if(bin_arr[i] == 0){
            for(let j = i+1; j<n; j++){
                if(bin_arr[j] != 0){
                   let temp = bin_arr[j] 
                   bin_arr[j] = bin_arr[i]
                   bin_arr[i] = temp
                   break
                }
            }
        }
    }
    return bin_arr
}


// console.log(moveAllzeroToEnd([1,1,1,1,0,1,1,0,1,0,0,1,1]))
// console.log(moveAllzeroToEnd([10,11,12,13,0,14,15,0,16,0,0,17,18]))


// Efficient solution


debugger
function moveAllzeroToEnd2(arr){
    let n = arr.length;
    let count = 0;
    for (let i = 0; i<n ; i++){
        console.log( i , count)
        if (arr[i] != 0){
            let temp = arr[i]
            arr[i] = arr[count]
            arr[count] = temp;
            count++;
        }
    }
    return arr
}
console.log(moveAllzeroToEnd2([1,1,1,1,0,1,1,0,1,0,0,1,1]))