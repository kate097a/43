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

    const book = document.querySelector(".pages") 
    
    let countPages = 1;

    let directions = [-1, 1]


    let paged = {
        1: "./img/book/1.png",
        2: "./img/book/2.png",
        3: "./img/book/3.png",
        4: "./img/book/4.png",
        5: "./img/book/5.png",
        6: "./img/book/6.png",
        7: "./img/book/7.png",
        8: "./img/book/8.png",
        9: "./img/book/9.png",
        10: "./img/book/10.png",
        11: "./img/book/11.png",
        12: "./img/book/12.png",
        13: "./img/book/13.png",
        14: "./img/book/14.png",
        15: "./img/book/15.png",
        16: "./img/book/16.png",
        17: "./img/book/17.png",

    }

    function randomAngle() {
        let angle = Math.floor(Math.random() * 10);
        let direction = Math.floor(Math.random() * 2);
        console.log(angle, directions[direction])
        return [angle, directions[direction]]
    }


    let angle = [randomAngle(), randomAngle(), randomAngle()];
    document.getElementById("book1").style.transform=`rotate(${angle[0][0] * angle[0][1]}deg)`

    document.getElementById("book2").style.transform=`rotate(${angle[1][0] * angle[1][1]}deg)`

    document.getElementById("book3").style.transform=`rotate(${angle[2][0] * angle[2][1]}deg)`


    book.addEventListener("click", (e) => {
        bookPagesNext(paged)
    })

    function bookPagesNext(arr) {

        countPages += 1;

        const styles1 = window.getComputedStyle(document.getElementById("book1")).transform
        const styles2 = window.getComputedStyle(document.getElementById("book2")).transform
        const styles3 = window.getComputedStyle(document.getElementById("book3")).transform


        
        if (countPages >= 3) {            
            document.getElementById("book2").style.backgroundImage=`url(${paged[countPages - 1]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[countPages - 2]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        } else if (countPages == 2) {
            document.getElementById("book2").style.backgroundImage=`url(${paged[countPages - 1]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[15]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        } else if (countPages == 1) {
            document.getElementById("book2").style.backgroundImage=`url(${paged[15]})`
            document.getElementById("book3").style.backgroundImage=`url(${paged[14]})`

            document.getElementById("book2").style.transform=styles1
            document.getElementById("book3").style.transform=styles2
        }


        if (countPages != 17) {
    
            
            document.getElementById("book1").style.backgroundImage=`url(${paged[countPages]})`
            let angle = randomAngle();
            document.getElementById("book1").style.transform=`rotate(${angle[0] * angle[1]}deg)`
        
        } else {
            document.getElementById("book1").style.backgroundImage=`url(${paged[countPages]})`
            countPages = 1
            document.getElementById("book1").style.backgroundImage=`url(${paged[countPages]})`
    
        }

    }


    flag = false;
    const btns = document.querySelectorAll(".navBtn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseenter', (e) => {
            //document.getElementById("fixedMenu").style.backdropFilter="blur(10px)"
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


})

