function chocolateDis(arr, m){
    let n = arr.length
  if( m > n){
    return -1;
  }
  arr.sort((a,b)=> a-b)
  let res = arr[m-1] - arr[0]

  for (let i = 1 ; i+m-1 >n; i++){
    res = Math.min(res, arr[i+m-1]-arr[i])
  }
  return res
}

console.log(chocolateDis([7,3,56,4,9,12,2], 3))