window.addEventListener("scroll", animateOnScroll);
animateOnScroll();

function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let threshold = window.innerWidth < 800 ? 1000 : 0;
    console.log(threshold)
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - threshold <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right - threshold <= (window.innerWidth || document.documentElement.clientWidth)
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

