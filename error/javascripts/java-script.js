document.addEventListener("DOMContentLoaded", function() {
    const cursorDot = document.getElementById("cursorDot")

    document.addEventListener("mousemove", (e) => {
        let posX = e.clientX;
        let posY = e.clientY;
        let scrollPos = scrollY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        

            cursorDot.style.width = "3vw";
            cursorDot.style.height = "3vw";
            cursorDot.style.animation="none";
            cursorDot.animate({
                left: `${posX}px`,
                top: `${posY}px`,
                width: "3vw",
                backgroundColor: "black",
                height: "3vw",
                borderRadius: "100%"
            }, {
                duration:500,
                fill: "forwards"
            })
            
        
    })

})

