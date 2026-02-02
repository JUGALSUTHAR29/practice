// REVISION AND ADVANCE JAVA-SCRIPT CONCEPT LEARNING

// THIS KEYWORD USES BY CONDITION 

//global - window
console.log(this);

//function - window 
function abcd(){
        console.log(this);
}
abcd();

//method - object
var abcd = {
        name: function(){
                console.log(this);
        }, 
        age:29,
        email:"jugal2"
}
abcd.name();

//fun inside method(es5) - window
var obj = {
        sayName:function(){
                console.log(this);  //this is an object
                function childfun(){
                        console.log(this);  // but this is an window
        }
        childfun();
    }
}
obj.sayName();


// fun inside method(es6) - object
var obj2 = {
        sayName:function(){
                console.log(this); //this an object
                const child =()=>{                  //this an fat arrow function this is js es(6) function
                        console.log(this);  // this is an also obeject
                }
                child();
        }
}
obj2.sayName();


//this value in contructor function - new blank object

function add(){
        console.log(this);
}

const ans = new add(); //new -->  create blank object like this {}


//this value in event listner 
document.querySelector("button")  // this value in event listner which is event listner run on any line/any..(button) 
.addEventListener("click",function(){

        console.log(this);
})

