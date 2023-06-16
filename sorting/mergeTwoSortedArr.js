// function mergeTwoSortedArr(arr1, arr2){
//     return [...arr1, ...arr2].sort((a, b)=> a-b)
// }


// console.log(mergeTwoSortedArr([10,20,30,40,50],[1,2,3,4,5]))


const merge = (arr1, arr2) =>{
    let n1 = arr1.length;
    let n2 = arr2.length;
    
    let arr3 = []
    let i = 0, j = 0, k = 0;
    while(i < n1 && j < n2){
        if (arr1[i] < arr2[j]){
            arr3[k] = arr1[i]
            i++
            k++
        }else{
            arr3[k] = arr2[j]
            j++;
            k++;
        }
    }
    while (i < n1)
      arr3[k++] = arr1[i++]
    while (j < n2) 
      arr3[k++] = arr2[j++]
    return arr3
    
}
// console.log(merge([1,3,5,7],[2,4,6,8]))  
// console.log(merge([10,30,40,50],[1,2,3,4,5,20]))

module.exports = merge