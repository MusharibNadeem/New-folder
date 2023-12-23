function AddValue(Array1, index, value) 
{
    Array1.splice(index, 0, value)
    return Array1
  }
  
  let originalArray = [1, 2, 3, 4, 5]
  let NewArray = AddValue(originalArray, 2, 99)
  
  console.log(NewArray)