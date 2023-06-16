// Given an array nums[]  of size n, construct a product array p of same size 
// such that p[i] is equal to the product of all the elements of naums except nums[i]
function productArray(arr) {
    let totalProduct = 1
    const productArr = [];

    for(let ele of arr){
         totalProduct *= ele;
    }
    for(let num of arr){
        productArr.push(totalProduct/num)
    }

    return productArr
}

console.log(productArray([10,3,5,6,2]))
console.log(productArray([1,2,3]))