// count digit of given number

function countDigits(number) {
    let res = 0;
    while(number > 0){
    number = Math.floor(number/10)
    console.log(number)
    res++;
    } 
    return res;
}
console.log(countDigits(444566))