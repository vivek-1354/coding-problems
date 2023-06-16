function leadersInArr(arr) {
    let n = arr.length;
    for (let i = 0; i<n; i++){
        let flag = false
        for(var j = i+1; j< n; j++){
            if (arr[i] <= arr[j]){
                flag = true
                break
            }
        }
        if(!flag){
            console.log(arr[i])
        }
    }
}


leadersInArr([7,10,4,3,6,5,2])