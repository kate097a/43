document.addEventListener("DOMContentLoaded", function() {

    let posters = document.querySelectorAll(".poster");
    for (let i = 0; i <= posters.length - 1; i++) {
        posters[i].addEventListener("click", (e) => {
            if (!(posters[i].classList.contains("open"))) {
                for (let j = 0; j <= posters.length - 1; j++) {
                    if (posters[j].classList.contains("open")) {
                        posters[j].classList.remove("open");
                    }
                }
                posters[i].classList.add("open");
            } else {
                posters[i].classList.remove("open");
            }
            
        })
    }


    let mainscreen = document.querySelector(".mainScr");
    let moving = document.querySelector(".movement");
    mainscreen.addEventListener('mousemove', (e) => {
      let x = e.clientX/ 2 - mainscreen.getBoundingClientRect().left;
      let y = e.clientY/ 2 - mainscreen.getBoundingClientRect().top;
      moving.style.transform = `translate(-${x}px, -${y*1.5}px)`;
    });


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
          }, {
              duration:500,
              fill: "forwards"

          })
        })
            
        
        flag = false;
        const btns = document.querySelectorAll(".navBtn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('mouseenter', (e) => {
               // document.getElementById("fixedMenu").style.backdropFilter="blur(10px)"
                 document.getElementById("back").style.opacity="0.6"
                e.target.classList.add('hovered')
                //animText(cheakerText(e.target.id))
                var typed = new Typed('.fixedText', {
                    strings: [`${cheakerText(e.target.id)}`],
                    typeSpeed: 10
                  });
                  
                flag = true;
            }, false);
        }
    
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('mouseleave', (e) =>{
             //   document.getElementById("fixedMenu").style.backdropFilter="none"
                document.getElementById("back").style.opacity="0"
                document.getElementById("fixedText").textContent = "";
                e.target.classList.remove('hovered')
                flag = false;
            }, false);
        }
        
    
        function cheakerText(elem) {
          if (elem == "main") {
              return "главное меню"
          } else if (elem == "shop") {
              console.log("shop")
              return "магазин"
          } else if (elem == "place") {
              console.log("place")
              return "пространство"
          } else if (elem == "book") {
              console.log("book")
              return "книга"
          } else if (elem == "posters") {
            console.log("posters")
            return "постеры"
        }
      }

})
      


