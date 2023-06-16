function powerOfTwo(num) {
    for(let i=4; i<num; i++){
        if(num% 2 !=0){
           return false
        }
    }
    return true
}

console.log(powerOfTwo(322))