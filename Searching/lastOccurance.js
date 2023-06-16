//  find index of Last occurence of an element
function lastOccurence(arr, ele) {
    let n = arr.length;
    for (let i in arr) {
        if (arr[i] === ele && arr[i + 1] != ele) return parseInt(i, 10) + 1
    }
    return -1
}


// console.log(lastOccurence([10,15,20,20,40,40],20))
// console.log(lastOccurence([5,8,8,10,10],10))
// console.log(lastOccurence([8,10,10,12],7))

// Second method is to find last occurence is to traverse the array from the
// right side and then we find first occurence of an element, that is the last
// occurernce element of an array.

function lastOccurenceReverse(arr, ele) {
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] === ele) {
            return i
        }
    }
    return -1
}
// console.log(lastOccurenceReverse([10,15,20,20,40,40],20))
// console.log(lastOccurenceReverse([5,8,8,10,10],10))
// console.log(lastOccurenceReverse([8,10,10,12],7))


// Using binary search for find index of last occurence of an element

function lastOccurenceBinary(arr, ele, low, high, n=arr.length) {
    if (low > high) { return -1 }
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] > ele) {
        return lastOccurenceBinary(arr, ele, low, mid - 1, n)
    } else if (arr[mid] < ele) {
        return lastOccurenceBinary(arr, ele, mid + 1, high, n)
    }
    else {
        if (mid === n-1 || arr[mid] != arr[mid + 1]) {
            return mid
        } else {
            return lastOccurenceBinary(arr, ele, mid + 1, high, n)
        }
    }
}

console.log(lastOccurenceBinary([10, 15, 20, 20, 40, 40], 20, 0, 5))
console.log(lastOccurenceBinary([5, 8, 8, 10, 10], 10, 0, 4,5))
console.log(lastOccurenceBinary([8, 10, 10, 12], 7, 0, 3,4))
