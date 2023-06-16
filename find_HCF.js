function find_High_common_Factor(num1 , num2){
    let maxDivider = Math.min(num1, num2)

    while(maxDivider > 0 ){
        if(num1 % maxDivider === 0 && num2 % maxDivider === 0){
        break
    };
    maxDivider--;
    }
    return maxDivider  
}


console.log(find_High_common_Factor(10,15))
console.log(find_High_common_Factor(7,13))