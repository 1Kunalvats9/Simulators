function loading(){
    var tl = gsap.timeline()

    tl.to("#yellow1",{
        top:"-100%",
        delay:0.5,
        duration:0.5,
        ease:"expo.out "
    })

    tl.from("#yellow2 ", {
        top:"100%",
        delay:0.5 ,
        fontWeight:20, 
        duration:0.5,
        ease:"expo.out"
    },"anim")
    tl.from(".navbar",{
        opacity:0
    })
    tl.to(".loader h1",{
        delay:0.6,
        duration:0.5,
        color:"black",
        fontWeight:20
    },"anim")
    tl.to(".navbar",{
        opacity:1
    })
    tl.to(".loader",{
        display:"none",
    }) 
}
loading()
var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2");
var text = document.querySelectorAll(".chng-color");
elems.forEach(function(ele){
    ele.addEventListener('mouseenter',function(){
        var bgimg = ele.getAttribute('data-img');
        page2.style.backgroundImage = `url(${bgimg})`

    })
})
text.forEach(function(onetext){
    onetext.addEventListener('mouseenter',function(){
        onetext.style.color = "black";
    })
    onetext.addEventListener('mouseleave',function(){
        text.style.color = "white";
    })
})
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




 