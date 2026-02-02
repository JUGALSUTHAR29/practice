// var x=5;
// function getname() {
//         console.log('good evening');
// }
// getname();
//         console.log(x);
// let locker = new
// Array(100).fill(false);
// for (let stu=1; stu<=100; stu++) {
//         for(let locker= stu-1; locker< 100; locker += stu){
//                 locker[locker] = !locker[locker];
//         }
// }

// let openlocker = [];
// for(let i=0; i<locker.length; i++) {
//         if(locker[i]) {
//                 openlocker.push(i + 1);
//         }
// }
// console.log("locker remaining open:", openlocker);
let locker = new Array(100).fill(false);
for (let stu = 1; stu <= 100; stu++) {
  for (let lkr = stu - 1; lkr < 100; lkr += stu) {
    locker[lkr] = !locker[lkr];
  }
}

let openlocker = [];
for (let i = 0; i < locker.length; i++) {
  if (locker[i]) {
    openlocker.push(i + 1);
  }
}

console.log("locker remaining open:", openlocker);