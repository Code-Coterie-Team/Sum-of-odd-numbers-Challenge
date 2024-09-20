function rowSumOddNumbers(n) { 
  const firstNumber = (n * (n - 1)) + 1; 
  let sum = 0;  
  for (let i = 0; i < n; i++) {  
      sum += firstNumber + (i * 2);  
  }  
  return sum;  
}  