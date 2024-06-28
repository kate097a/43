
document.addEventListener('DOMContentLoaded', () => {
  
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
              height: "3vw",
              borderRadius: "100%",
              
          }, {
              duration:500,
              fill: "forwards"
          })

  })
    

  let flag = false;
  const btns = document.querySelectorAll(".navBtn");
  for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('mouseenter', (e) => {
           document.getElementById("back").style.opacity="0.6"
          e.target.classList.add('hovered')
          var typed = new Typed('.fixedText', {
              strings: [`${cheakerText(e.target.id)}`],
              typeSpeed: 10
            });
            
          flag = true;
      }, false);
  }

  for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('mouseleave', (e) =>{
          document.getElementById("back").style.opacity="0"
          document.getElementById("fixedText").textContent = "";
          e.target.classList.remove('hovered')
          flag = false;
      }, false);
  }  

  function cheakerText(elem) {
    if (elem == "main") {
        return "главное меню"
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

  function animText(a, btn) {
      a = a.split("");
      btn.addEventListener("mouseleave", (e)=> {
          return
      })
  a.forEach((el, i) => setTimeout(() => {
      document.getElementById("fixedText").textContent += a[i]
      btn.addEventListener("mouseleave", (e) => {
      })
  }, 100 * (i + 1)));

  }


})

