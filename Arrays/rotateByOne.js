function rotateByOne(arr){
    let temp = arr[0]
    for (let i = 1; i< arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length-1] = temp
    return arr
}     

// console.log(rotateByOne([60,10,20,30,40,50]))

// rotate from given position

function rotateByGivenPos(arr, pos){
    let n = arr.length
    let idx = pos - 1;
    for (let i = 0; i<n; i++){
        if(i === idx){
            let low = i;
            let high = n-1;
            while(low < high){
                let temp = arr[low]
                arr[low] = arr[high]
                arr[high] = temp
                low++;
                high--;
            }
            break;
        }
    }
    return arr
}

console.log(rotateByGivenPos([10,20,30,40,50,90,80,70,60],6))