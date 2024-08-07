function videoconAnimatiion(){
    var videocon = document.querySelector(".video-container")
var playbtn = document.querySelector(".play")

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1,
    })

})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
    })

})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x -50,
        top:dets.y -50

    })
})
}
videoconAnimatiion()
 
function loadingAnimation(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        duration:1,
        delay:0.5,
        stagger:0.3
    })
    gsap.from(".page1 .video-container",{
        scale:0,
        opacity:0,
        duration:1.3,
        delay:0.5,
        stagger:0.4
    })
}
loadingAnimation()
var text=document.querySelector(".quote h2")
gsap.from(text,{
    opacity:0,
    duration:2,
    scale:1,
    delay:0.5
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




