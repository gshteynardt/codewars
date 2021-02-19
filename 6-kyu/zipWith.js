//zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.
//
// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)
//
// Inputs should not be modified.

// const zipWith = (callback, arr1, arr2) => {
//   const arr = [];
//   const length = Math.min(arr1.length, arr2.length);
//   for (let i = 0; i < length; i++) {
//     arr.push(callback(arr1[i], arr2[i]))
//   }
//
//   return arr;
// }

const zipWith = (fn,a0,a1) => Array.from({ length: Math.min(a0.length, a1.length) }, (_,i) => fn(a0[i], a1[i]));

zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] );
const plus = (a,b) => a+b ;
zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]);


