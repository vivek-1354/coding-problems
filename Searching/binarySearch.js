function findElement(arr, ele) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    // console.log(mid);
    if (arr[mid] === ele) {
      return mid;
    } else if (arr[mid] > ele) {
      high = mid - 1;
    } else if (arr[mid] < ele) {
      low = mid + 1;
    }
  }
  return -1;
}

// module.exports = findElement
// console.log(findElement([10, 20, 30, 40, 50, 60, 70], 60));
// console.log(findElement([10, 20, 30, 40, 50, 60, 70], 20));
// console.log(findElement([10, 20, 30, 40, 50, 60, 70], 80));


// Binary search using recursion

function findElementRecursion(arr, ele, low ,high) {
  if (low > high){
    return -1 
  }
  let mid =  Math.floor((low+high)/2)
  if (arr[mid] == ele){
    return mid 
  }
  else if (arr[mid] > ele){
    return findElementRecursion(arr, ele, low, mid-1)
  }
  else if (arr[mid] < ele){
    return findElementRecursion(arr, ele, mid+1, high)
    
  }
}

// console.log(findElementRecursion([10,20,30,40,50,60,70],60,0, 6 ))
// console.log(findElementRecursion([10,20,30,40,50,60,70],30,0, 6 ))
module.exports = findElementRecursion