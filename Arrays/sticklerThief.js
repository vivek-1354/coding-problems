function strictlerThief(arr) {
    let n = arr.length;
    let firstTotal = 0
    let lastTotal = 0

    for(let i = 0; i<n; i +=2){
        firstTotal += arr[i]
        lastTotal += arr[i+1]
    }

    return Math.max(firstTotal, lastTotal)
}

let lis = [5,20,10,100,10,5]

console.log(strictlerThief(lis))