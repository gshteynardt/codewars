//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// const XO = str => {
//   const x = 'x';
//   const o = 'o';
//
//   const count = (inputValue, inputStr) => [...inputStr].reduce((count, item) => {
//     if(inputValue === item.toLowerCase()) count++;
//     return count;
//   }, 0)
//
//   const countX = count(x, str);
//   const countY = count(o, str);
//   return countX === countY;
// }

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
const result = XO('xo');
