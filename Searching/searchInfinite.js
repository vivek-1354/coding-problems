function searchInInfiniteSizedArray(arr, ele){
    let i = 0;
    while(true){
        if(arr[i]===ele) return i;
        if(arr[i]> ele) return -1;
        i++;
    }
}


// console.log(searchInInfiniteSizedArray([1,10,20,30,40,50,55,100,200],55))
// console.log(searchInInfiniteSizedArray([1,10,20,30,40,50,55,100,200],15))

// efficient solution
const  findElementRecursion =require('./binarySearch') 

function search(arr, ele){
    if(arr[0]===ele) return 0;
    let i = 1
    while(arr[i] < ele){
        i = i*2
        if(arr[i] === ele) return i
    }
    return (findElementRecursion(arr,ele,i/2+1, i-1))
    //                    arr, ele, low=8/2+1=5, high= 8-1
}

console.log(search([1,10,15,20,40,60,80,100,200,500,1000],100))