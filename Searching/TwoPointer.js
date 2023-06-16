// Here we using Two pointer approach for check if the given number is present or
// not in sum of pairs of given sorted array

/* In this function we take first element from an array and last element of 
an array compare the sum of pair of number with given number.and if they are same 
we simply return true,and if they are not same we again compare with the given 
number if sum of pair is greater than given number we simply ignore the last
element of array because this is sorted array and any number is add to this element
is greater than given number so we completely ignore last element
and if sum of pair is less than given number we simply ignore the first element
of an array */

function checkNumInSumOfPairs(arr, num){
    const n = arr.length;
    let i = 0;
    let j = n-1;
    while(i<j){
        if(arr[i]+arr[j]=== num) return true
        else if(arr[i] +arr[j] > num){
            j--;
        }else{
            i++;
        }
    }
    return false
}

console.log(checkNumInSumOfPairs([2,4,8,9,11,12,20,30],23))
console.log(checkNumInSumOfPairs([2,4,8,9,11,11,20,30],23))