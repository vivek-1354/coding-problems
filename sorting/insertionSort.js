class Fun {
    static swap(val1, val2){
        [val2, val1] = [val1, val2] 
    }
}
// console.log(swap(55,45))


function  insertionSort(arr) {
    let n = arr.length;
    for(let i = 0; i<n-1; i++){
        for (let j = i+1; j < n; j++){
            if(arr[j] < arr[i]) {
                Fun.swap(arr[i], arr[j])
                // let temp = arr[j]
                // arr[j] = arr[i]
                // arr[i] = temp
            }
        }
    }
    return arr
    
}

// console.log(insertionSort([12,11,13,5,6]))

const insertionSort2 = arr => {
      let n = arr.length;
      for (let i = 1; i< n; i++){
        let key =  arr[i]
        let j = i-1

        while(j >=0 && arr[j] > key){
              arr[j+1] = arr[j]
              j--;
        }
        arr[j+1] = key
        console.log(arr)
      }
      return arr
}

console.log(insertionSort2([50,30,20,10]))