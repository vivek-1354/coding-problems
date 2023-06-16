// This function sort the array using bubble sort algorithm

function sortArr1(arr){
   let n = arr.length;
   let round = 0
   while (round < n-1 ){
       for (let i = 0; i < n-1; i++) {
           if(arr[i] > arr[i+1]){
               [arr[i] , arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
       round++;
   }
   return arr
}

//  second method
//  In this solution we ignore max element when one loop complete
function sortArr2(arr){
   let n = arr.length;
   let round = arr.length
   while (round > 1 ){
       for (let i = 0; i < n-1; i++) {
           console.log(n-1)
           if(arr[i] > arr[i+1]){
               [arr[i] , arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
        console.log('_______________________')
       round++;
    //    console.log(arr)
       n--
   }
   return arr
}

// console.log(sortArr1([2,10,8,7]))
// console.log(sortArr1([4,2,5,10,6,3,8,7,9,1]))


// solution 3 optimized bubble sort

// Here we initialize a flag variable swapped to false, and after traversing
// first time, and if any swap happen we initilized it to true. And then 
// we check if swapped is equal to false or not we simply break the loop.
// This means given array is sorted because we didn't swap any value.


function swap(val1, val2){
    [val1, val2] = [val2, val1]
}

function bubbleSort(arr){
    let n = arr.length;
    for (let i = 0; i < n-1; i++){
        let swapped = false;
        // Here we simply ignore last element because after first iteration
        // max(arr) will be in last position So we ignore the by j < n-1-i
        for (let j = 0; j< n-1-i; j++){
            if (arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true;
            }
        }
        console.log(i)
        if(swapped == false){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([2,10,5,8,7]))
console.log(bubbleSort([10,20,30,40,50,60,70]))