window.addEventListener("scroll", animateOnScroll);
animateOnScroll();

function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let bottom;
    if(window.screenX<800){
        bottom = window.innerHeight + 1000;
    }else{
        bottom = window.innerHeight;
    }
    return (
        rect.top  >= 0 &&
        rect.left  >= 0 &&
        rect.bottom  <= (bottom || document.documentElement.clientHeight) &&
        rect.right  <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function animateOnScroll() {
    let animatedDiv = document.querySelectorAll("div");
    animatedDiv.forEach((e)=>{
        if (isInViewport(e)) {
            e.style.opacity = 1;
            e.style.transform = "translateY(0)";
            e.style.transform = "translateX(0)";
        }
    });
}

