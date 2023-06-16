function maxConsecutiveONes(arr) {
    let n = arr.length;
    let res = 0
    for (let i = 0; i <n; i++) {
        if(arr[i] ==1){
            let count = 1;
            for (let j = i+1; arr[j] ==1; j++){
                 count++
        }
        res = Math.max(res, count)
        }
    }
    return res
}

console.log(maxConsecutiveONes([1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0]))