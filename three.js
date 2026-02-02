//closer
// function timer(){
//         var a = 12;
//         return setTimeout(function(){
//                 console.log(a);
//        },2000)
// }
// var ans = timer();

// function applyOperation(a, b, operation) {
//   return operation(a, b);
// }
// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// Using the higher-order function
// console.log(applyOperation(3, 4, add));    
// console.log(applyOperation(3, 4, multiply)); 


function makeMultiplier(n) {
  return function(x) {
    return x * n;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(8)); 
console.log(triple(9)); 
