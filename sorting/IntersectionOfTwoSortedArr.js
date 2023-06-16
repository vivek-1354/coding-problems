function intersectionOfTwoSortArr(arr1, arr2){
    let n = arr1.length;
    let m = arr2.length;

    for(let i = 0; i<n; i++){
        // if( i > 0 && arr1[i] == arr1[i-1]){
        //     continue;
        // }
        for (let j = 0; j < m; j++){
            if(arr1[i] === arr2[j]){
                console.log(arr1[i]);
                break;
            }
        } 
    }
}

// intersectionOfTwoSortArr([1,20,20,40,60],[2,20,20,20]

// Eficient solution of finding Intersection of two sorted array

let a = [10,20,20,30,40,60]
let b = [2,20,20,20,30,60]

function Intersection(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let i = 0;
    let j = 0;

    while(i <n && j < m ){
        if (i > 0 && arr1[i] === arr1[i-1]){
            i++;
            continue;
        }
        if (arr1[i] > arr2[j]){
            j++;
        }
        else if (arr1[i] < arr2[j]){
            i++;
        }
        else{
            console.log(arr1[i])
            i++;
            j++;
        }
    }

    
}


Intersection(a,b)