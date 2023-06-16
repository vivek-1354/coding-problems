// It take thita n square time

// Here we find minimun element in every intration and push into temp arr  and
// then we simply change the min value with Infinty in given array.

function selectionSort(arr){
    let n = arr.length;
    let temp = [];
    for (let i = 0; i <n; i++){
        let minEle = Math.min(...arr)
        temp[i] = minEle
        arr[arr.indexOf(minEle)] = Infinity
    }
    return temp
}

console.log(selectionSort([10,5,8,20,2,15]))

function selectionSort2(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        min_idx = i;
        for( j = i +1; j < n; j++){
            if (arr[j] < arr[min_idx]){
                min_idx = j
            }
        }
        temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx]= temp
    }
    return arr
}
console.log(selectionSort2([10,5,8,20,2,15]))