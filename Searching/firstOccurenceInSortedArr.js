function firstOccurence(arr, ele) {
    let n = arr.length;
    if (ele > arr[n - 1]) return "Overflow"
    for (let i in arr) {
        if (arr[i] === ele) return i
    }
    return -1
}

console.log(firstOccurence([1, 10, 10, 10, 20, 20, 40], 20))
console.log(firstOccurence([1, 10, 10, 10, 20, 20, 40], 40))
console.log(firstOccurence([1, 10, 10, 10, 20, 20, 40], 401))

// using recursion

function firstOccurenceRecursive(arr, ele, low, high) {
    if (low > high) return -1
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] === ele) {
        while (arr[mid] === arr[mid-1]){
            return firstOccurenceRecursive(arr, ele, low, mid-1)
        }
        return mid
    } else if (arr[mid] > ele) {
        return firstOccurenceRecursive(arr, ele, low, mid - 1)
    } else if (arr[mid] < ele) {
        return firstOccurenceRecursive(arr, ele, mid + 1, high)
    }
}

console.log(firstOccurenceRecursive([5,10,10,15,20,20,20],20 , 0 ,6))
console.log(firstOccurenceRecursive([5,10,10,15,20,20,20],10 , 0 ,6))
console.log(firstOccurenceRecursive([20,20,20,20],20 , 0 ,3))