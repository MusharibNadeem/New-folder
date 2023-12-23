function removeNegative(numbers: number[]): number[] {
    let positiveNumbers: number[] = [];
    
    for (let number of numbers) {

      if (number > 0) {
        positiveNumbers.push(number);
      }
    }
  
    return positiveNumbers;
  }
  
  let Array00 = [1, -2, 3, -4, 5, -6];
  let positiveNumbers = removeNegative(Array00);
  
  console.log("Befoe:", Array00);
  console.log("After:", positiveNumbers);