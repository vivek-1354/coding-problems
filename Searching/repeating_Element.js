// Find first repeating element in an array that always contains 0 to max(arr) element
// Ex arr = [0,1,2,3,2,2]
// Here max(arr) is 3 so it only contains numbers from 0 to 3.

function firstRepeationEle1(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // console.log(i)
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
}

console.log(firstRepeationEle1([0, 1, 2, 3, 2, 2]));

function firstRepeationEle2(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[i + 1]) {
        return arr[i];
      }
    }
  }
}

console.log(firstRepeationEle2([0, 1, 2, 3, 2, 2]));



function firstRepeationEle3(arr){
    let n = arr.length
    const visited = arr.map(()=>false) 
    for (let i = 0; i < n; i++){
        if(visited[arr[i]]){
            // console.log(visited)
            return arr[i]
        }else{
            visited[arr[i]] = true
        }
    }
}

console.log(firstRepeationEle3([0, 1, 2, 3, 2, 2]));
console.log(firstRepeationEle3([1,3,2,4,3,3]));
console.log(firstRepeationEle3([1,1,1,1]));