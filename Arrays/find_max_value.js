function findMaxEle(arr) {
    let n= arr.length;
    for (let i = 0; i < n; i++) {
        let flag = true;
        for (let j = 0; j<n ; j++){
            if(arr[j] > arr[i]){
                flag = false;
                break;  
            }
        }
        if (flag){
            return i
        }
    }
}

console.log(findMaxEle([10,20,30,50,21,12,44]))

// second method

function maxEle(arr) {
    let max = [arr[0]]
    let res = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
            res = i
        }
    }
    return res
} 
console.log(maxEle([10,20,30,50,21,12,44]))


// third method

function maxEle2(arr) {
    let res = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > arr[res]){
            res = i
        }
    }
    return res
} 

console.log(maxEle2([10,20,30,50,21,12,44]))