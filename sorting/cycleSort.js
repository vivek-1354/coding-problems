function cycleSort(arr) {
    let n = arr.length;
    
    for (let cs = 0; cs < n-1; cs++){
        let item = arr[cs];
        let pos=0;
        for(let j = 0; j<n; j++){
            if (arr[j] < item){
                pos++
            }
        }
        let temp = item
        item = arr[pos]
        arr[pos] = temp
        // console.log(arr)
        while (pos != cs){
            pos = cs
            for (let i = cs+1 ; i< n-1; i++){
                if (arr[i] < item){
                    pos++
                }
            }
            let tem = item
            item = arr[pos]
            arr[pos] = tem
        }
    }
    return arr
}

arr = [20,40,50,10,30]

console.log(cycleSort(arr))