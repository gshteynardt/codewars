/* Description:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.**/

// function getCount(str) {
//   let vowelsCount = 0;
//   const arr = ['a', 'e', 'i', 'o', 'u'];
//   [...str].forEach(item => {
//     if(arr.includes(item)) ++vowelsCount;
//   });
//
//   return vowelsCount;
// }

const getCount = str => str.toLowerCase().split('').filter(c => "aeiou".includes(c)).length;

getCount("abracadabra");//5
