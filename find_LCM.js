function find_Least_common_Multiple(num1, num2) {
  let max = Math.max(num1, num2);

  while (true) {
    if (max % num1 === 0 && max % num2 === 0) {
      return max;
    } else {
      max++;
    }
  }
}

console.log(find_Least_common_Multiple(4, 6));
console.log(find_Least_common_Multiple(7, 13));
