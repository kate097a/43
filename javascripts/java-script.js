document.addEventListener("DOMContentLoaded", function() {
  /**   flag = false;
    const btns = document.querySelectorAll(".navBtn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseenter', (e) => {
            document.getElementById("fixedMenu").style.backdropFilter="blur(10px)"
            e.target.classList.add('hovered')
            animText(cheakerText(e.target.id), e.target)
            flag = true;
        }, false);
    }

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseleave', (e) =>{
            document.getElementById("fixedMenu").style.backdropFilter="none"
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
        }
    }

    function animText(a, btn) {
        a = a.split("");
        btn.addEventListener("mouseleave", (e)=> {
            return
        })
   // a.forEach((el, i) => setTimeout(() => {
    //    document.getElementById("fixedText").textContent += a[i]
   //     btn.addEventListener("mouseleave", (e) => {
  //          removeText(a, e)
  //      })
  //  }, 100 * (i + 1)));
      a.some((el, i) => {
        let bbb = setTimeout(() => {
        document.getElementById("fixedText").textContent += a[i]
        btn.addEventListener("mouseleave", (e) => {
            clearTimeout(bbb)
            removeText(a, e)
            return false
        })
        return true

      }, 100 * (i + 1) )})

    }

    function removeText(a, e) {
        //a = a.split("");
         a.forEach((el, i) => setTimeout(() =>document.getElementById("fixedText").textContent == a.slice(1, i), 100 * (i + 1)));

    }
         */

    const cursorDot = document.getElementById("cursorDot")

    document.addEventListener("mousemove", (e) => {
        let posX = e.clientX;
        let posY = e.clientY;
        let scrollPos = scrollY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        

        if (scrollPos < 500 || scrollPos > 2200) {
            cursorDot.style.width = "3vw";
            cursorDot.style.height = "3vw";
            cursorDot.style.animation="none";
            cursorDot.animate({
                left: `${posX}px`,
                top: `${posY}px`,
                width: "3vw",
                height: "3vw",
                borderRadius: "100%",
                
            }, {
                duration:500,
                fill: "forwards"
            })
            
        } else {
            cursorDot.style.width = "1vw";
            cursorDot.style.height = "1vw";
            cursorDot.style.animation="aa 1s infinite cubic-bezier(0.075, 1, 0.095, 2)";
            cursorDot.animate({
                left: `${posX}px`,
                top: `${posY}px`,
                width: "25vw",
                height: "25vw",
                borderRadius: "0%",
            }, {
                duration:500,
                fill: "forwards"
            })
        }
        
    })




   // const shelfs = document.getElementById("shelfs")
 //   shelfs.addEventListener("mousemove", (e) => {
 //       console.log(e.target)
//
  //  })

//window.addEventListener("scroll", (e) => {
 //   let scrollPos = scrollY;
 //   if (scrollPos >= 500) {
 //       document.getElementById("text").style.display="none"
 //   } else {
 //       document.getElementById("text").style.display="none"
  //  }
//})
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

    document.querySelector("footer").addEventListener("mouseover", (e) => {
        document.querySelector(".cursorDot").style.backgroundColor="white"
        document.querySelector(".cursorDot").style.backdropFilter="none"

            document.querySelector("footer").addEventListener("mouseleave", (e) => {
                document.querySelector(".cursorDot").style.backgroundColor="black";
                        document.querySelector(".cursorDot").style.backdropFilter="invert(70%)"
                document.querySelector("footer").removeEventListener("mouseleave", (e) => {})
            })
    })



})

