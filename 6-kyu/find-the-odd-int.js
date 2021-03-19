//Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

const findOdd = (arr) => {
  const count =  arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(count).filter(item => item[1] % 2 !== 0).map(item => +item[0])[0];
}


findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]);
findOdd([10]);
findOdd([1,1,1,1,1,1,10,1,1,1,1]);
findOdd([5,4,3,2,1,5,4,3,2,10,10]);

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
//So, here in this example, by simply repeatedly using XOR on all the elements of the array, any duplicates naturally filter themselves out and finally I am left with the one non-repeated integer.
