// let heroes = ["spider","doremon","sinchan","sijuka","nobita","giyan"];
// for (heroe of heroes) {
//         console.log(heroe);
// }


//while loop practice
// let heroes = ["doremon", "giyan", "sizuka"];
// let i = 0; 
// while (i<heroes.length){
//         console.log(heroes[i]); (i++);
// }

//for of loop practice

// let movies = ['spiderman','jolly llb','jai ho','dil wale ..'];
// for (movie of movies) {
//         console.log(movie);
// }

// break keyword practice
// let i = 1;
// while (i<=6) {
//         if (i==3) {
//                 break;
// }
//         console.log(i);
//         i++;
// }


// nested for of loop practice
// let heroes = ["doremon", "jiyan", "sizuka", "nobita"];
// for (hero of heroes) {
//         for (list of hero){
//                 console.log(list);
//         }
// }


let todo =[];
let req = prompt ("enter your request");
while(true) {
        if(req == "quit"){
                console.log("quiting the app");
                break;
        }
        if(req == "list") {
                console.log("---------");
                for(let i=0; i<todo.length; i++) {
                        console.log(i, todo[i]);
                }
                console.log("-----------");
        }
        else if (req == "add") {
                let task = prompt("please enter your task whhich you want to be add")
                todo.push(task);
                console.log("task added");
        }
        else if (req == "delete") {
                let task = prompt("please enter your task which you want to be delete")
                todo.splice(task);
                console.log("task deleted");        
        }
        else {
                console.log("wrong request");
        }
        req = prompt("please enter your request");
}