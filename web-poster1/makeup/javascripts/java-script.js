window.onload = function() {
    let color = "";
    let pen = false;
    let eraser = false;
    
    let lineW = 3;
    function colorChoose(e) {
        if (e.target.className != "color" && e.target.className != "pallet") {
            color = colors[e.target.id]
            console.log("выбран цвет:" + color);
            let list = document.querySelectorAll(".colorButton");
            for (let i = 0; i < list.length; i++) {
                console.log(list[i])
                if (list[i].classList.length == 2) {
                    list[i].classList.remove("choosen")
                }
            }
            e.target.classList.add("choosen");
            
        }
          
    }

    colors = {"red": "#C11212", "orange": "#D76919", "yellow": "#E5B50C", 
    "green": "#56C512", "lightBlue": "#13C5AF", "blue": "#164FBF", 
    "purple": "#923BC6", pink: "#C8239A", black: "#000000"}
    
    pallet.addEventListener("click", colorChoose);


//magic.js
//Obtain the canvas and its 2d rendering context

let canvas = document.getElementById("drawingBoard")
let ctx = canvas.getContext("2d");
 
//Get the refernce to HTML elements
const brushSize =
    document.getElementById('brush-size');
const colorPicker =
    document.getElementById('color-picker');
const clearCanvas =
    document.getElementById('clear-canvas');
let isDrawing = false;
 
//Initializing the canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth / 2;
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = 'black';
 
//start drawing
function startPosition(e) {
    isDrawing = true;
    draw(e);
}
 
//end drawing
function endPosition() {
    isDrawing = false;
    ctx.beginPath();
}
 
//Function to draw on the Canvas
function draw(e) {
    if (!isDrawing) return;
    let posTop = window.pageYOffset;
    ctx.strokeStyle =
        color; 
        //pick the color
    ctx.lineWidth =
       lineW; 
        //Select the brush size
    ctx.lineTo(
        e.clientX - canvas.offsetLeft,
        e.clientY + posTop
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(
        e.clientX - canvas.offsetLeft,
        e.clientY + posTop
    );
}
 
//event listener for differnt mouse actions
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
 
 
//Get references to the pen and eraser button
const penButton =
    document.getElementById('pen');
const eraserButton =
    document.getElementById('eraser');
 
//switing to pen mode
function activatePen() {
    if (pen) {
    ctx.globalCompositeOperation =
        'source-over';
    ctx.strokeStyle = color;
    }
}
 
//switching to eraser mode
function activateEraser() { 
    if (eraser) {
    ctx.globalCompositeOperation =
        'destination-out';
    ctx.strokeStyle =
        'rgba(0, 0, 0, 0)';

    }
}
 
penButton.addEventListener('click', () => {
        if (pen) {
            pen = false
            let penn = document.getElementById("penn")
            penn.style.opacity="1"
        } else {
            pen = true;
            eraser = false
            activatePen();
            let penn = document.getElementById("penn")
            penn.style.opacity="0.5"
            let eraserr = document.getElementById("eraserr")
            eraserr.style.opacity="1"
        }
});
 
eraserButton.addEventListener('click', () => {
        if (eraser) {
            eraser = false;
            let eraserr = document.getElementById("eraserr")
            eraserr.style.opacity="1"
        } else {
            eraser = true
            pen = false;
            activateEraser();
            let eraserr = document.getElementById("eraserr")
            eraserr.style.opacity="0.5"
            let penn = document.getElementById("penn")
            penn.style.opacity="1"
        }
});

let eyes = document.getElementById("eyes");
let pris = document.getElementById("pris");
let lashes = document.getElementById("lashes")



}