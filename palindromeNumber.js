// palindrome number
// in palindrome number if you read that number left to right or right to left then in both
// senario number is same

const result = (function (num) {
//    num = num.toString()
   num = ""+toString()
   let low = 0
   let high = num.length-1
   while (low < high){
    if(num[low] != num[high]){
        return "No"
    }else{
        low++;
        high--;
    }
 }
 return "Yes.."
}(367))

console.log(result)

// second method

function checkPalindrome1(num) {
    let temp = num
    let rev = 0

    while (temp >0){
        rev = rev*10+(temp%10)
        console.log(rev)
        temp = Math.floor(temp/10)
        console.log(temp)
    }
    return num == rev
}

console.log(checkPalindrome1(363))
// console.log(checkPalindrome1(763))
console.log(checkPalindrome1(4553))