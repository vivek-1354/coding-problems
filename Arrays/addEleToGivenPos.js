function addEleInGivenPos(arr, ele, pos) {
    let n = arr.length;
    let idx = pos -1;
    
    for (let i = n-1; i >=idx; i--){
         arr[i+1] = arr[i]
    }
    arr[idx] = ele
    return arr
}

console.log(addEleInGivenPos([10,20,40,50,60],30,3))