function mergeOverlappingIntervals(arr){
    let n = arr.length;

    for (let i = 1; i <n ; i++){
        if (arr[i][0] > arr[i-1][0] && arr[i][1] < arr[i-1][1] ){
            console.log(arr[i])
        }else {
            console.log(arr[i-1][0], arr[i][1])
        }
    }
}

let ar = [[1,3],[2,4],[5,7],[6,8]]
let ar1 = [[7,9],[6,10],[4,5],[1,3],[2,4]]


mergeOverlappingIntervals(ar)
mergeOverlappingIntervals(ar1)