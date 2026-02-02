// inp
// num:[2,5,1,3,4,7]
//n=3
//out

// const { Score } = require("@mui/icons-material");

//[2,3,5]
// function shuffle(l1,l2) {
// function shuffle(l1,l2) {
//         let result = [];
//           for(let i=0; i<l1.length; i++){
//                 result.push(l1[i]);
//                 result.push(l2[i]);
//       }
//       return result;
//  }
// let nums =[2,5,1,3,6,9,8,3];
// let n=parseInt(nums.length/2);
// let results = [];
// let l1= nums.slice(0,n)
// let l2 = nums.slice(n,nums.length)
// for(let i=0; i<l1.length; i++){

//         results.push(l1[i]);
//         results.push(l2[i]);

//       }
// console.log(results);
// console.log(shuffle(nums.slice(0,n),nums.slice(n,nums.length)));
// const pro ={
//   name: "jugal",
//   age: 21,
//   city: "bangalore",
//   state: "karnatka"
// }/



//settimeout -- settimeout ka code kucch der badd chalta hai jitna mile sec function me likha ho
// console.log("hey1");
// setTimeout(function(){
//   console.log("hii");
//   console.log("hello");
// }, 2000);

//setinterval -- set interval ka code kuch der baad chalta hai baar baar ek particular interval 
// time mein
// var count = 1;
// const marainterval = setInterval(function(){
//   ++count;
//   console.log(count);
//   if(count===5) clearInterval(marainterval);
// }, 1000);


// fetch API -- ye kisi aur url par jaa kar kucch data lana ya data humaree pas se us url par lekar jayeega
// kyuki ye internet par jaayega aur fir data ko leekar aayeega to isme time lagega to by default hi js mein fetch 
// ko async banaaye gaya hai kyuki fetch ka kam hai data laana wo bhi kisi url se ab asie ho sakta hae ki us url ki website 
// slow ho ,to data laane main time lagega aur agar fetch sync hota to uske badd ka code jab tak  nahi chalta jab tak uska data nahi aajata , which 
  // is a big issue so poora code aatak sakta tha 
  // sarall sabdo main jab tak data fetch nahi hoga / data nahi aaye ga tab tak next line ka code nahi chalega 
// so process bhut slow run hoga 
// fetch(`data lana wala url`)
// .then(jab deta aa jeyga tabhi chelaga)


// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(redable => console.log(redable.results[0].gender))
// let age = 16;
// let result = age >=18 ? "adult" : "minor";
// let num = [1,2,3];
// let square = num.map (n => n*n)
// return num;