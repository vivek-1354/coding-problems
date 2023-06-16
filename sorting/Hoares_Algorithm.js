// Hoare's partition algorithm

function partition(arr, low, high){
    let pivot = arr[low]
    let i = low-1
    let j = high+1

    while(true){
        do{
            i++
        } while (arr[i] < pivot)
        do {
            j--
        } while (arr[j] > pivot)

        if ( i >= j) {return j}
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}


// console.log(partition([5,3,8,4,2,7,1,10],0,7))


let arr = [2,4,8,7,5,2,6,2,5,8,2,4,6,2,,5,2,2]
let count = 0
let i = -1

do{
    i++
    if (arr[i] === 2){
        count++
    }
} while ( i < arr.length)

console.log(count)