

document.addEventListener("DOMContentLoaded", function() {
  

  var score = 0;
  var maxCombo = 0;
  var clicked = false;
  var map = [
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ]; 
  var circleCount = 0;
  var timeDelay = [100, 100, 100, 100, 100, 50, 50, 50];
  var speed = [1, 1.1, 1, 1, 1, 0.5, 0.5, 0.5]
  
  function scoreCount() {
    score++;
    console.log("Счет:", score);
    clicked = true;
    document.getElementById("scoreText").textContent = `счет: ${score}`;
    if (score > maxCombo) {
      maxCombo = score;
      console.log("новый лучший результат:" + maxCombo);
      document.getElementById("bestScoreText").textContent = `лучший счет: ${score}`;
    }
  }

  function waitingFail(circle) {
    let underFlag = false;
    document.getElementById("button" + circle).addEventListener('click', function(event) {
      underFlag = true;
      document.getElementById("button" + circle).removeEventListener('click', function(event) {});
    });

    setTimeout(function() {
      if (underFlag == false) {
        console.log("кружочек пропущен");
        document.getElementById("circle" + circle).remove();
        scoreReset()
      } else {
        document.getElementById("circle" + circle).remove();
      }
    }, speed[circle - 1] * 1000 + 106)
    
  }
  
  function coordinateFinder(elementId) {
    var el = document.getElementById(elementId);
    var rect = el.getBoundingClientRect();
    console.log("Координаты", elementId, ":", rect.top, rect.left);
    return [rect.top, rect.left];
  }
  
  function click(target) {

    let a = coordinateFinder("button" + target);
    let b = coordinateFinder("circle" + target);
    if (Math.abs(a[0] - b[0]) < 160) {
      console.log("Да");
      scoreCount();
    } else {
      console.log("Нет");
      scoreReset();
    }
  }
  
  function scoreReset() {
    score = 0;
    document.getElementById("scoreText").textContent = `счет: ${score}`;
    console.log("Счет сброшен:", score);
  }
  
  function mapReaderSecond(miniMap) {
    let circle = 0;
    miniMap.forEach(function(item, i) {
      let circleNumber = i + 1;
      if (item == 1) { 
        console.log(circleNumber + " - номер появившегося круга");
        circle = circleNumber;
      } else {
      }
    });

    if (circle == 1) {
      setTimeout(function() {            
       /* document.getElementById("circle" + circle).style.display = "flex"; */
       let div = document.createElement('div');
       div.className = "circle first";
       div.id = "circle1";
       document.getElementById("tapSection1").prepend(div);
      }, timeDelay[circle - 1]);
    setTimeout(function() {
      document.getElementById("circle" + circle).style.animation=`goingBottom1 ${speed[circle - 1]}s infinite linear`;
    }, timeDelay[circle - 1]);
    waitingFail(circle);

    } else if (circle == 2) {
      setTimeout(function() {
        let div = document.createElement('div');
        div.className = "circle second";
        div.id = "circle2";
        document.getElementById("tapSection2").prepend(div);
      }, timeDelay[circle - 1]);
    setTimeout(function() {                                
      document.getElementById("circle" + circle).style.animation=`goingBottom2 ${speed[circle - 1]}s infinite linear`;
    }, timeDelay[circle - 1]);
    waitingFail(circle);

    } else {
      setTimeout(function() {
        /*document.getElementById("circle" + circle).style.display = "flex"; */
        let div = document.createElement('div');
        div.className = "circle third";
        div.id = "circle3";
        document.getElementById("tapSection3").prepend(div);
      }, timeDelay[circle - 1]);
    setTimeout(function() {
      document.getElementById("circle" + circle).style.animation=`goingBottom3 ${speed[circle - 1]}s infinite linear`;
    }, timeDelay[circle - 1]);
    waitingFail(circle);

    }
    
  }

  
  function mapReader(map) {
    let count = 0;
    function ending() {
      let end = document.getElementById("end");
      end.style.display="flex";
    }
    function processNextMap() {
      if (count < map.length) {
        console.log(map[count]);
        mapReaderSecond(map[count]);
        count++;
        setTimeout(processNextMap, 2000);
      } else {
        ending()
      }
    }
  
    processNextMap();
  }
  
  function circleRunning(buttonId) {
    let button = document.getElementById(buttonId);
    button.addEventListener('click', function(event) {
      let target = event.target.id.split('').slice(6);
      console.log(target);
      click(target);
    });
  }

 /* function whatCircleCount() {
    if (circleCount == 1) {
      circleRunning("circle1");
      circleCount++;
    } else if (circleCount == 2) {
      circleRunning("circle2");
      circleCount++;
    } else { 
      circleRunning("circle3");
      circleCount = 1;
    }
  } */
  
  window.onload = function() {
    mapReader(map);
    circleRunning("button1");
    circleRunning("button2");
    circleRunning("button3");
    /*
    circleRunning("circle1");
    circleRunning("circle2");
    circleRunning("circle3"); */
    /*for (let i = 0; i < map.length; i++) {
      whatCircleCount()
    } 
  };*/};
  
});

