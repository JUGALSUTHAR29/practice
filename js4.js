var t1 = gsap.timeline()
t1.from(".line h1", {
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5,
})
t1.from("#line1-part1, .line h2",{
        opacity:0,
        onstart:function() {
         var h5timer = document.querySelector("#line1-part1 h5");
         var grow = 0;
         setInterval(function(){
            if(grow < 100){
                h5timer.innerHTML = grow++;
            } else{
                h5timer.innerHTML = grow;
            }
        },33);
      },
});
t1.to('#loader',{
        opacity:0,
        duration:0.2,
        delay:4,
});
t1.from("#page1", {
        delay:0.2,
        duration:0.5,
        y:1600,
        ease:power4, 
});
t1.to("#loader",{
        display:"none"
})
