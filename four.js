function connecttoserver(){
        console.log("conecting to server...");
        return new Promise(function(resolve, reject){
                setTimeout(function(){
                        console.log("connected...");
                },2000)
        })
}

connecttoserver()
.then()
.catch()
function getcourses(){
        console.log("geting courses...");

return new Promise(function(resolve, reject){
        setTimeout(function(){
                resolve(["course1","course2","course3"])
        },2000)
  })
}
connecttoserver()
.then(function(response){
        console.log(response);
        return getcourses()
})
.then(function(response){
        console.log(response);
})