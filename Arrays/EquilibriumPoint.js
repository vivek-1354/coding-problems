function findEquilibriumPoint(arr) {
    let n  = arr.length;
    let prefix = [arr[0]]
    let suffix = [arr[n-1]]

    if(n == 1){
        return n
    }
    for (let i = 1; i< n; i++){
        prefix.push(arr[i] + prefix[prefix.length-1])
    }

    for (let i = n-2; i >= 0; i--){
        suffix.push(arr[i] + suffix[suffix.length-1])
    }

    for (let i = 0; i< n; i++){
        if(prefix[i] == suffix[i])
            return i+2 
    }
    return -1
}

// console.log(findEquilibriumPoint([1,3,5,2,2]))
// console.log(findEquilibriumPoint([1]))
// console.log(findEquilibriumPoint([1,2,3,4,5,4,3,3]))

function equilibriumPoint(a)
{
    let n = a.length
    if(n==1)
    return 1;
    let Totalsum=0;
    for(let i=0;i<n;i++)
    {
        Totalsum+=a[i];
    }
    let sum=0;
    for(let i=0;i<n-1;i++)
    {
        sum+=a[i];
        if((Totalsum-sum-a[i+1])== sum)
        return i+2;
    }
    return -1;
}
console.log(equilibriumPoint([1,2,3,4,5,4,3,3]))