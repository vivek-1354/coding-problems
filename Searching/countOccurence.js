//  count occurence in a sorted array
function countOccurenceOfEle(arr, ele) {
    let n = arr.length;
    var count = 0
    for(let i = 0; i<n; i++){
       if(arr[i] === ele){
        count++;
        for(let j = i+1; j< n; j++){
            if(arr[j] != arr[i]){
                return count
            }
            count++
            i++
        }
       }
    }
    return count
}

console.log(countOccurenceOfEle([10,20,20,20,30,30],20))
console.log(countOccurenceOfEle([10,10,10,10,10],10))