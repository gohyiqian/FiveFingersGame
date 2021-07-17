'use strict'

// define Canvas
let canvas = document.createElement("canvas");
document.body.insertBefore(canvas, document.body.childNodes[0]);
let ctx = canvas.getContext("2d");
const cw = canvas.width = 400;
const ch = canvas.height = 500;

let gameBlocks = [];
let lines = [];
// function startScene() {
// }

// function instructionScene() {
// }

// object for canvas element
// const myGameCanvas = {
//   canvas: document.createElement("canvas"),
//   start: function () {
//     this.canvas.width = 400;
//     this.canvas.height = 550;
//     this.context = this.canvas.getContext("2d");
//     document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     //this.frameNum = 0;
//     // window.setInterval(function, milliseconds);
//     //this.interval = setInterval(animateGame, 10); //update every 10th millisec => 100 times per sec
//   },
//   clear: function () {
//     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   }
// }

// create a class for constructing components
class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.incrementer = Math.floor(Math.random() * 15);
  }
  update() {
    this.y += this.incrementer;
    // let ctx = myGameCanvas.context;
    let grd = ctx.createLinearGradient(0, 0, 0, 500);
    grd.addColorStop(0, "white");
    grd.addColorStop(1, this.color);
    ctx.fillStyle = grd;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// constructing some compoments
function createComponents(num) {
  for (let i = 0; i < num; i++) {
    let width = 40;
    let height = 40;
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let x = [20, 95, 180, 260, 340];
    let y = 10;

    let eachBlock = new Component(width, height, colors[i], x[i], y)
    gameBlocks.push(eachBlock);
  }
  //requestAnimationFrame(createComponents);
}

createComponents(5);

// create a class for constructing tracklines
class TrackLines {
  constructor(x1, y1, x2, y2, strokeStyle) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.strokeStyle = strokeStyle;
  }
  drawLine() {
    // let ctx = myGameCanvas.context;
    ctx.beginPath();
    ctx.setLineDash([20, 5, 5, 5]);
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
    ctx.closePath();
  }
}
// constructing some tracklines
function createLines(num) {
  for (let i = 0; i < num; i++) {
    let x1 = [40, 120, 200, 280, 360]
    let y1 = 0;
    let x2 = [40, 120, 200, 280, 360]
    let y2 = 500;

    let eachLine = new TrackLines(x1[i], y1, x2[i], y2)
    lines.push(eachLine);
  }
}
createLines(5);


// maybe can input as array of digits that represent different songs
// function randomSpeed() {
//   let power = Math.floor(Math.random() * 3)
//   console.log(power)
//   let num = Math.floor(Math.random() * 5 + power)
//   console.log(num)
//   return num
// }
// randomSpeed()



function animateGame() {
  // myGameCanvas.clear();
  // myGameCanvas.start();
  ctx.clearRect(0, 0, cw, ch);

  for (let i = 0; i < gameBlocks.length; i++) {
    gameBlocks[i].y += 1;
    gameBlocks[i].update();
    if (gameBlocks[i].y > 0.9 * ch) {
      gameBlocks[i].y = 0;
    }

  }

  for (let i = 0; i < lines.length; i++) {
    lines[i].drawLine();
  }
  //requestAnimationFrame(animateGame);
}

//animateGame()
setInterval(animateGame, 100); //every 1/10th of a second

// const element = document.getElementById('key');
// let start;
// function step(timestamp) {
//   if (start === undefined)
//     start = timestamp;
//   const elapsed = timestamp - start;

//   // `Math.min()` is used here to make sure that the element stops at exactly 400px.
//   element.style.transform = 'translateY(' + Math.min(0.1 * elapsed, 400) + 'px)';

//   if (elapsed < 4000) { // Stop the animation after 2 seconds
//     window.requestAnimationFrame(step);
//   }
// }

// window.requestAnimationFrame(step);


// let gameSpeed = 0;
// gameSpeed += randomSpeed();
// document.getElementById("speed").innerHTML = gameSpeed

setInterval(myTimer, 0);

// Add Time
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString('it-IT');
}

// EventListeners
let numOfButtons = document.querySelectorAll("#key").length;

// mouse-click eventlistener
for (let i = 0; i < numOfButtons; i++) {
  document.querySelectorAll("#key")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML)
    makeCorrectSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    addScore(10)
  }, false);
}

// keypress eventlistener
document.addEventListener("keypress", function (event) {
  for (let i = 0; i < gameBlocks.length; i++) {
    if (gameBlocks[i].y >= 0.8 * ch && gameBlocks[i].y <= 0.9 * ch) {
      makeCorrectSound(event.key);
      buttonAnimation(event.key);
      addScore(10);
      console.log("Pressed!")
    }
    // } else if (gameBlocks[i].y < 0.8 * ch || gameBlocks[i].y > 0.9 * ch) {
    //   makeWrongSound(event.key);
    //   addScore(-10);
    // }
  }
}, false);

function makeCorrectSound(key) {

  switch (key) {
    case "a":
      let btnA = new Audio("sounds/correctSound.mp3");
      btnA.play();
      break;

    case "s":
      let btnB = new Audio("sounds/correctSound.mp3");
      btnB.play();
      break;

    case "d":
      let btnD = new Audio('sounds/correctSound.mp3');
      btnD.play();
      break;

    case "f":
      let btnF = new Audio('sounds/correctSound.mp3');
      btnF.play();
      break;

    case "g":
      let btnH = new Audio('sounds/correctSound.mp3');
      btnH.play();
      break;

    default:
      console.log(key);

  }
}

function makeWrongSound(key) {

  switch (key) {
    case "a":
      let btnA = new Audio("sounds/wrongSound.mp3");
      btnA.play();
      break;

    case "s":
      let btnB = new Audio("sounds/wrongSound.mp3");
      btnB.play();
      break;

    case "d":
      let btnD = new Audio('sounds/wrongSound.mp3');
      btnD.play();
      break;

    case "f":
      let btnF = new Audio('sounds/wrongSound.mp3');
      btnF.play();
      break;

    case "g":
      let btnH = new Audio('sounds/wrongSound.mp3');
      btnH.play();
      break;

    default:
      console.log(key);

  }
}

// some button effects by changing css class
function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed_" + key);

  setTimeout(function () {
    activeButton.classList.remove("pressed_" + key);
  }, 200);
}

// Adding Score
let score = 0;

function addScore(x) {
  $({
    score: 0
  }).animate({
    score: x
  }, {
    duration: 1000,
    easing: "linear",
    step: function (now, fx) {
      $("#score").html(score + Math.floor(now));
    },
    queue: false,
    complete: function (now, fx) {
      score += x;
    }
  });
  $("#tag").fadeIn({
    duration: 700,
    easing: "linear",
    step: function (now, fx) {
      $(this).css("top", -55 * now + "px");
    }
  }).fadeOut({
    duration: 300,
    step: function (now, fx) {
      $(this).css("top", -55 * (2 - now) + "px");
    }
  });

}