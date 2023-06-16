function lumotoPartition(arr, low, h){
    let pivot = arr[h]
    let i = low-1;

    for (let j = low; j<= h-1; j++){
        // console.log(i,j)
        if(arr[j] <  pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i+1], arr[h]] = [arr[h], arr[i+1]]
    console.log(arr)
    return i+1
}


console.log(lumotoPartition([10,35,80,30,90,40,50,70],0,7 ))
                       //   [10,30,40,50,70,80,90]