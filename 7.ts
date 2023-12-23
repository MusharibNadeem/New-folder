function SumofArray(numbers: number[]): number {
    
    let totalSum = 0;

    for (let number of numbers) {
      totalSum += number;
    }
  
    return totalSum;
  }
  let Array0= [10, 5, 2, 7];
  let sum = SumofArray(Array0);
  console.log("The sum of the numbers is:", sum)